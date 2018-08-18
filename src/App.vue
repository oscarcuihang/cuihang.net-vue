<template>
  <div id="app">
    <!-- <First msg="hello"/> -->
    <Users />
  </div>
</template>

<script>
import First from './components/first';
import Users from './components/users';

export default {
  name: 'App',
  components: {
    First,
    Users,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
