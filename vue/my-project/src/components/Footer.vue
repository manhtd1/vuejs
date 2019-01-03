<template>
  <div>
      <footer>
          
  <h1>{{ footer }} {{title}} </h1> 
      </footer>
     
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String
        }
    },
  data(){
    return{
        footer: 'Copy by '
    }
  },
}
</script>

<style scoped>
footer{
    background-color: gray;
    padding: 10px;
}
h1{
    color:#333;
    text-align: center;
}

</style>
