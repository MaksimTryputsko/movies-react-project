import type { AxiosInstance } from "axios"
import axios from "axios"

interface IOptions {
  queryParams: Record<string, unknown>
}

class HttpClient {
  httpClient: AxiosInstance

  constructor(baseURL: string) {
    this.httpClient = axios.create({
      baseURL,
    })
  }

  async get(url: string, options: IOptions) {
    try {
      const response = await this.httpClient.get(url, {
        params: { api_key: `${process.env.REACT_APP_API_KEY}`, ...options.queryParams },
      })

      return response.data
    } catch (e) {
      return console.log(e)
    }
  }
}

export const httpClient = new HttpClient("https://api.themoviedb.org/")
