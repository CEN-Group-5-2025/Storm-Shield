import { UserDetailsSchema } from 'src/schemas'
import { mockUser } from 'src/utils'
import { NetworkBase } from './NetworkBase'

export class Network extends NetworkBase {
  private static instance: Network

  private constructor() {
    super()
  }

  /**
   * Ensures there only exists one instance
   * of this class.
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new this()
    }

    return this.instance
  }

  /*=== Club & User Routes ================================*/
  /**
   * Fetch details for logged in user.
   */
  public async getCurrentUser() {
    const url = this.endpoints.user.info

    return await this.request(url, UserDetailsSchema, {
      mock: { data: mockUser },
    })
  }
}
