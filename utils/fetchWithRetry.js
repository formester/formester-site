import axios from 'axios'

const MAX_RETRIES = 3
const BASE_DELAY_MS = 1000

export default async function fetchWithRetry(url, config = {}, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await axios.get(url, { ...config, timeout: 30000 })
    } catch (error) {
      const isRetryable =
        error.code === 'ECONNRESET' ||
        error.code === 'ETIMEDOUT' ||
        error.code === 'ECONNABORTED' ||
        error.code === 'EPIPE' ||
        error.code === 'EAI_AGAIN' ||
        (error.response && error.response.status >= 500)

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
