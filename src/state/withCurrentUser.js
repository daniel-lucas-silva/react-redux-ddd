/* @flow */
import type { State } from './store';
import type { WithCurrentUser } from '../domain/user';

const withCurrentUser = (state: State): WithCurrentUser => ({
  currentUser: state.user
});

export default withCurrentUser;
