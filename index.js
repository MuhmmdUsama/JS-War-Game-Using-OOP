function Character(name, strength, health) {
  this.strength = strength;
  this.health = health;
  this.name = name;
  this.controls = new Controls(name)
  this.healingmsg = new HealingAndMsg(name)
}

// ###### Buttons
function Controls (name){
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-health`);
}

function HealingAndMsg (name){
  this.healingBar = document.querySelector(`.${name}-heal-bar span`);
  this.deadMsg = document.querySelector(`.${name}-dead-msg`);
}

//Attacking the enemy and affecting his health by the amount of the strength value
Character.prototype.attack = function (enemy) {
  if (enemy.health > 0) {
    enemy.health -= this.strength;
    enemy.healingmsg.healingBar.style.width = `${enemy.health}%`;
    enemy.charName = document.querySelector(`.${enemy.name}-title`)//Character name beside health status
    .innerHTML =`${enemy.name} ${enemy.health}`
    
    if (enemy.health == 0) {
      enemy.controls.attackBtn.style.display = 'none';
      enemy.controls.healthBtn.style.display = 'none';
      enemy.healingmsg.deadMsg.textContent = 'You Lose'
    }
  }
};

Character.prototype.status = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Strength: ${this.strength}`);
  console.log(`Health: ${this.health}`);
};

//increase character health
Character.prototype.healthMe = function () {
  if (this.health < 100) this.health += this.strength;
  if (this.health > 100) this.health = 100;
  this.healingmsg.healingBar.style.width = `${this.health}%`;
  console.log(this.name, this.health);
  this.charName = document.querySelector(`.${this.name}-title`)
  .innerHTML =`${this.name} ${this.health}`
};

let nartoo = new Character('nartoo', 10, 100);
let sasuka = new Character('sasuka', 5, 100);

// ########## Event-Listeners
nartoo.controls.attackBtn.addEventListener('click', () => {
  nartoo.attack(sasuka);
});

sasuka.controls.attackBtn.addEventListener('click', () => {
  sasuka.attack(nartoo);
});

nartoo.controls.healthBtn.addEventListener('click', () => {
  nartoo.healthMe();
});

sasuka.controls.healthBtn.addEventListener('click', () => {
  sasuka.healthMe();
});
