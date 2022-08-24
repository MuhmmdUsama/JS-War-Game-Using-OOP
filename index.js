// ###### Buttons
let nartooAttack = document.querySelector ('#n-attack')
, nartooHealth = document.querySelector ('#n-health')
, sasukaAttack = document.querySelector ('#s-attack')
, sasukaHealth = document.querySelector ('#s-health');



function Character (name,strength,health){
    this.strength = strength,
    this.health = health,
    this.name = name
}
//Attacking the enemy and affecting his health by the amount of the strength
Character.prototype.attack = function(enemy){ 
    enemy.health -= this.strength
    console.log('enemy',enemy.health)
}

Character.prototype.status = function(){
    console.log(`Name: ${this.name}`)
    console.log(`Strength: ${this.strength}`)
    console.log(`Health: ${this.health}`)
}
//increase character health
Character.prototype.healthMe = function(){
    if(this.health < 100)this.health+= this.strength
    if(this.health > 100)this.health = 100
}

let nartoo = new Character('Nartoo',10,100)
let sasuka = new Character('Sasuka',5,100)


console.log(nartoo.attack(sasuka))
console.log(nartoo.attack(sasuka))
console.log('$#'.repeat(10))
sasuka.status()
sasuka.healthMe()
sasuka.status()

console.log('$#'.repeat(10))

console.log(sasuka.attack(nartoo))
nartoo.healthMe()
// nartoo.healthMe()
nartoo.status()
console.log('$#'.repeat(10))
