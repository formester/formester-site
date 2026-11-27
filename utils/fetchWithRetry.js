import axios from 'axios'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000
// The app limits each IP per minute; without a Retry-After header, wait for the next minute.
const RATE_LIMIT_DELAY_MS = 60_000

export default async function fetchWithRetry(url, config = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      const status = error.response?.status
      const isRateLimited = status === 429
      const isRetryable =
        isRateLimited ||
        error.code === 'ECONNRESET' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNABORTED' ||
        error.code === 'EPIPE' ||
        error.code === 'EAI_AGAIN' ||
        status >= 500

      if (isRetryable && attempt < retries) {
        const delay = isRateLimited ? rateLimitDelay(error.response) : BASE_DELAY_MS * Math.pow(2, attempt - 1)
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
 * How long a rate-limited request waits before trying again.
 * @param {{headers?: Object}} response the 429 response
 * @returns {number} e.g. 30000 for "Retry-After: 30", 60000 when the header is missing
 */
function rateLimitDelay(response) {
  const seconds = Number.parseInt(response.headers?.['retry-after'], 10)
  if (Number.isNaN(seconds)) {
    return RATE_LIMIT_DELAY_MS
  }
  return seconds * 1000
}
