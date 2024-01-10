/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  put: {
    status: 200
    /** User updated */
    resBody: Types.User
    reqBody: Types.UpdateUser
  }

  delete: {
    status: 204
  }
}
