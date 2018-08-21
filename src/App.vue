<template>
  <div id="app">
    <!-- <First msg="hello"/> -->
    <!-- <Users /> -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
import First from './components/First';
import Users from './components/Users';

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
