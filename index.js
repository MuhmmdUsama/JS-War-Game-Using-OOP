function Character(name, strength, health) {
  this.strength = strength;
  this.health = health;
  this.name = name;
  // ###### Buttons
  this.attackBtn = document.querySelector(`#${this.name}-attack`);
  this.healthBtn = document.querySelector(`#${this.name}-health`);
  this.healingBar = document.querySelector(`.${this.name}-heal-bar span`);
  this.deadMsg = document.querySelector(`.${this.name}-dead-msg`);
}

//Attacking the enemy and affecting his health by the amount of the strength
Character.prototype.attack = function (enemy) {
  if (enemy.health > 0) {
    enemy.health -= this.strength;
    enemy.healingBar.style.width = `${enemy.health}%`;
    console.log('enemy', enemy.health);
    if (enemy.health == 0) {
      enemy.attackBtn.style.display = 'none';
      enemy.healthBtn.style.display = 'none';
      enemy.deadMsg.textContent = 'You Lose'
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
  this.healingBar.style.width = `${this.health}%`;
  console.log(this.name, this.health);
};

let nartoo = new Character('nartoo', 10, 100);
let sasuka = new Character('sasuka', 5, 100);

// ########## Event-Listeners
nartoo.attackBtn.addEventListener('click', () => {
  nartoo.attack(sasuka);
});

sasuka.attackBtn.addEventListener('click', () => {
  sasuka.attack(nartoo);
});

nartoo.healthBtn.addEventListener('click', () => {
  nartoo.healthMe();
});

sasuka.healthBtn.addEventListener('click', () => {
  sasuka.healthMe();
});



console.log('$#'.repeat(10));
