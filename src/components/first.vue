<template>
  <div class='first'>
    <input type="text" v-model="title">
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>No Name</p>
    <ul>
      <li v-for="item in items" v-bind:key="item.title ">
        {{item.title}}
      </li>
    </ul>
    <button v-on:click="greet('Hello Vue App!')">Say Greeting</button>

    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

    <hr />

    <label>First Name: </label><input type="test" v-model="user.firstName">
    <br />
    <label>Last Name: </label><input type="test" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'FooBar',
    },
  },
  data() {
    return {
      title: 'Vue APP!',
      user: {
        firstName: 'First!',
        lastName: 'Last!',
      },
      showName: true,
      items: [
        { title: 'item 1' },
        { title: 'item 2' },
        { title: 'item 3' },
      ],
    };
  },
  methods: {
    greet(greeting) {
      alert(greeting);
    },
    pressKey(e) {
      console.log(e.target.value);
    },
    enterHit() {
      console.log('Enter Hit');
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName}${this.user.lastName}`;
    },
  },
};
</script>


<style scoped>

</style>
