import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpPostClient } from '@/services/interfaces/http-post-client'

export class RemoteAuthentication {
  constructor (
    private readonly url1: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({ url: this.url1, body: params })
  }
}
