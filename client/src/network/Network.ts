import { ShelterListSchema, UserDetailsSchema } from 'src/schemas'
import { AlertListSchema } from 'src/schemas/alert'
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

  /*=== API Routes ================================*/
  /**
   * Fetch details for logged in user.
   */
  public async getCurrentUser() {
    const url = this.endpoints.user.info

    return await this.request(url, UserDetailsSchema, {
      mock: { data: mockUser },
    })
  }

  /**
   * Fetch alerts.
   */
  public async getAlerts() {
    const url = this.endpoints.alerts.list

    return await this.request(url, AlertListSchema)
  }

  /**
   * Fetch shelters.
   */
  public async getShelters() {
    const url = this.endpoints.shelters.list

    return await this.request(url, ShelterListSchema)
  }
}
