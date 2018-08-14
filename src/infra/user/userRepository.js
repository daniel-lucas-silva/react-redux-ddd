/* @flow */
import type { UserRepository } from '../../domain/user';
import typeof * as ConduitApiService from '../conduit/conduitApiService';

type Dependencies = {
  conduitApiService: ConduitApiService
};

export default ({ conduitApiService }: Dependencies): UserRepository => ({
  fromAuthInfo(userAuthInfo) {
    return this._authUser(userAuthInfo, 'users/login');
  },

  add(user) {
    return this._authUser(user, 'users');
  },

  async _authUser(user, url) {
    try {
      const { data } = await conduitApiService.post(url, { user });

      return data.user;
    } catch(ajaxError) {
      throw conduitApiService.extractErrors(ajaxError);
    }
  }
});
