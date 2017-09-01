import namespace from 'utils/namespace';

export const usersTypes = namespace('users', {
  getters: [
    'users',
  ],
  actions: [
    'fetch',
  ],
  mutations: [
    'RECEIVE',
  ],
});
