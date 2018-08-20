<template>
  <div class='users'>
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="test" v-model="newUser.name" placeholder="Add New User">
      <br />
      <input type="test" v-model="newUser.email" placeholder="Add New User email">
      <br />
      <input type="submit">
    </form>

    <ul>
      <li v-for="user in users" v-bind:key="user.email">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      newUser: {},
      users: [
      ],
    };
  },
  methods: {
    addUser(e) {
      this.users.push({
        name: this.newUser.name,
        email: this.newUser.email,
        contacted: false,
      });
      e.preventDefault();
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data;
      });
  },
};
</script>


<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
