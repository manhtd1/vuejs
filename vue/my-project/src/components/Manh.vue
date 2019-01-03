<template>
  <div id='manhs'>
 <ul>
     <!-- <p>{{manhs}}</p> -->
     <li v-for='(manh,index) in ttt' :key='index' @click='manh.show=!manh.show' :class={}>
         <h2>{{manh.name}}</h2>
         <h3 v-show="manh.show">{{ manh.job }}</h3>
     </li>
 </ul>
 <button @click='delmanhs'>Del manh</button>
  </div>
</template>

<script>

export default {
//  props:['ttt'],
props:{
    ttt:{
        type: Array,
        required: true

    }
},
  data(){
    return{
        isActive: false
  }
},
methods:{
    delmanhs(){
        this.ttt.pop()
    }
}
}
</script>

<style >
#manhs{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    background: coral
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222; 
   
}

</style>
