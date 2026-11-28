import axios from 'axios'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

export default async function fetchWithRetry(url, config = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      const status = error.response?.status
      if (status === 429) {
        throw rateLimitedError(url, error)
      }

      const isRetryable =
        error.code === 'ECONNRESET' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNABORTED' ||
        error.code === 'EPIPE' ||
        error.code === 'EAI_AGAIN' ||
        status >= 500

      if (isRetryable && attempt < retries) {
        const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1)
        console.warn(
          `[fetchWithRetry] Attempt ${attempt}/${retries} failed for ${url} (${error.code || error.message}). Retrying in ${delay}ms...`
        )
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }
}

/**
 * Throws when any request in this build was rate limited, naming each URL.
 * @throws {Error} e.g. "1 request was rate limited by the app: https://app.formester.com/templates.json"
 */
export function verifyNoRateLimitedRequests() {
  const urls = globalThis.__rateLimitedRequests || []
  if (urls.length === 0) {
    return
  }
  const noun = urls.length === 1 ? 'request was' : 'requests were'
  throw new Error(`${urls.length} ${noun} rate limited by the app: ${urls.join(', ')}`)
}

/**
 * Records a 429 for the end-of-build check and returns an error naming the URL and limit.
 * @param {string} url e.g. "https://app.formester.com/templates.json"
 * @param {Error} error the axios error, with the 429 response
 * @returns {Error} e.g. "Rate limited by https://app.formester.com/templates.json (limit 200)"
 */
function rateLimitedError(url, error) {
  // On globalThis, not module state: the prerendered pages run a bundled copy of this file in the same process.
  globalThis.__rateLimitedRequests ||= []
  globalThis.__rateLimitedRequests.push(url)
  const limit = error.response.headers?.['ratelimit-limit'] || 'unknown'
  return new Error(`Rate limited by ${url} (limit ${limit})`, { cause: error })
}
