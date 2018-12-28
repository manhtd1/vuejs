<template>
  <div id="app">
    <h1>{{name}}</h1>
    <p>{{ko}}</p>
    <input type="text" v-model="name" >
    

  </div>
</template>

<script>
import tung from '../src/main.js'


export default {
  name: 'app',
  data() {
    return {
      name: "tung",
      ko:"name",
      tung
    }
  },
  methods: {
    

  }
}
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
