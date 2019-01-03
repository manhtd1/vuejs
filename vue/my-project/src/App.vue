<template>
  <div>
  <app-header :title='title' @changeTitle="updateTitle($event) "></app-header>
  <app-manh :ttt='manhs'></app-manh>
  <app-footer :title='title'></app-footer>
  </div>
</template>

<script>
// import Manh from './components/Manh'

export default {
//  components:{
//    'app-manh':Manh
//  },
  data(){
    return{
      manhs:[
            {name: 'manh',job:'ky su',show: false},
            {name: 'tung',job:'ky thuat',show: false},
            {name: 'nam',job:'lap trinh',show: false},
            {name: 'huy',job:'tester',show: false},
            {name: 'hung',job:'kien truc',show: false},
            {name: 'dat',job:'css',show: false}
    ],
    title:'manh123'
    }
  },
  methods:{
    updateTitle(abc){
      this.title= abc
    }
  }
}
</script>

<style >

</style>
