new Vue({
  el: '#app',
  data: {
    playerHeath: 100,
    monsterHeath: 100,
    gameisRunning: false,
    turns: [],
  },
  methods: {
    startNewGame() {
      this.gameisRunning = true,
      this.playerHeath = 100,
      this.monsterHeath = 100,
      this.turns= []
    },
    attack() {
        //checkoptions
        if (this.checkPlayerOptions()) return
        //monster
        damage =  this.inputDamage(1,10)
        this.monsterHeath -= damage;
        this.turns.unshift({
            isPlayer: true,
            textLog: "Player đánh được "+ damage
      })
    console.log(`MonterHeath ${this.monsterHeath}`)
      
      //player
     this.monsterAttack()
    console.log(`PlayerHeath ${this.playerHeath}`)
      
    },
    monsterAttack(){
        damages= this.inputDamage(1,10)
        this.playerHeath -= damages,
        this.turns.unshift({
            isPlayer: false,
            textLog:" Monster đánh được " + damages
        })
    },
    heal(){
        if ( this.playerHeath > 70){
            return  false
        } else if (this.playerHeath <=60){
            this.playerHeath +=10;
        } else{
            this.playerHeath = 70
        }
        this.turns.unshift({
            isPlayer:true,
            textLog:"Player được hồi 10"
        })
        this.monsterAttack();
    },
    giveUp(){
        this.startNewGame(),
        this.gameisRunning =  false;
        alert('You Lost')
    },
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
            if( confirm('You Lost')){
                this.startNewGame();
            }else{
                this.gameisRunning = false
            } 
            return true
        }
        return;
    },
  }
})
