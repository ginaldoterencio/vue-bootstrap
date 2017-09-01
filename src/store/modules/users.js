import { usersAPI } from 'api';
import { usersTypes } from 'utils/types';
import { statusEnum } from 'utils/helpers';

const state = {
  users: [],
};

const getters = {
  [usersTypes.getters.users]: state => state.users,
};

const actions = {
  [usersTypes.actions.fetch]({ commit }) {
    return new Promise((resolve, reject) => {
      usersAPI.fetch()
        .then(({ data, status }) => {
          if (status === statusEnum.OK) {
            commit(usersTypes.mutations.RECEIVE, data);
            resolve();
          }
        })
        .catch(() => {
          reject();
        });
    });
  },
};

const mutations = {
  [usersTypes.mutations.RECEIVE](state, users) {
    state.users = users;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
