new Vue({
  el: '#app',
  data: {
    playerHeath: 100,
    monsterHeath: 100,
    gameisRunning: false
  },
  methods: {
    startNewGame() {
      this.gameisRunning = true
      this.playerHeath = 100
      this.monsterHeath = 100
    },
    attack() {
        //checkoptions
        if (this.checkPlayerOptions()) return
        //monster
      this.monsterHeath -= this.inputDamage(1,12)
    console.log(`MonterHeath ${this.monsterHeath}`)
      
      //player
     this.monsterAttack()
    console.log(`PlayerHeath ${this.playerHeath}`)
      
    },
    specialAttack(){},
    heal(){
        if ( this.playerHeath > 70){
            return  false
        } else if (this.playerHeath <=60){
            this.playerHeath +=10;
        } else{
            this.playerHeath = 70
        }
        this.monsterAttack();
    },
    giveUp() {},
    inputDamage(minDamage,maxDamage){
        return Math.floor(Math.random() * maxDamage) + minDamage
    },
    checkPlayerOptions(){
        if(this.monsterHeath<=0){
            if( confirm('You won')){
                this.startNewGame();
            }else{
                this.gameisRunning = false
            } 
            return true
        } else if ( this.playerHeath <=0 ){
            if( confirm('You lost')){
                this.startNewGame();
            }else{
                this.gameisRunning = false
            } 
            return true
        }
        return;
    },
    monsterAttack(){
        this.playerHeath -= this.inputDamage(2,10)
    },
  }
})
