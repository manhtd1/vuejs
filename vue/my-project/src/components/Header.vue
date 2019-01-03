<template>
  <div>
  <header>
      <h1 @click="changeTitle" >{{title}}</h1>
  </header>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String
        }
    },
  data(){
    return{
        title: 'VueJs Test'
    }
  },
  methods:{
      changeTitle(){
            this.$emit('changeTitle','CTS')      
            }
  }
}
</script>

<style scoped>
header{
    background-color: aqua;
    padding: 10px;
}
h1{
    color: #333;
    text-align: center;
}


</style>