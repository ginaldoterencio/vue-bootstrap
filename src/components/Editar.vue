<template>
  <div class="hello">
    <h1>Editar Page</h1>
    <p v-for="user of users">{{ user.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from 'store';
import { usersTypes as types } from 'utils/types';

export default {
  name: 'hello',
  computed: {
    ...mapGetters({
      users: types.getters.users,
    }),
  },
  created() {
    store.dispatch(types.actions.fetch);
  },
};
</script>

<style>

</style>
