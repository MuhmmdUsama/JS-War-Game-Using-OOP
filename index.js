import { Character } from "./modules/character.js";

//Attacking the enemy and affecting his health by the amount of the strength value
Character.prototype.attack = function (enemy) {
  if (enemy.health > 0 && !enemy.health <= 0) {
    enemy.health -= this.strength;
    enemy.healingmsg.healingBar.style.width = `${enemy.health}%`;
    
    if (enemy.health <= 0) {
      enemy.health = 0;
      enemy.controls.attackBtn.remove();
      this.controls.attackBtn.remove();
      enemy.controls.healthBtn.remove();
      this.controls.healthBtn.remove();
      enemy.healingmsg.healingBar.style.width = '0%';

      enemy.healingmsg.deadMsg.innerHTML = `LOSER!!<br> 
      <br> Name: ${enemy.name}
      <br> Strength: ${enemy.strength}
      <br> Health: ${enemy.health}`
      
      this.healingmsg.deadMsg.innerHTML = `WINNER!!! <br>
      <br> Name: ${this.name}
      <br> Strength: ${this.strength}
      <br> Health: ${this.health}`
    }
    enemy.charName = 
    document.querySelector(`.${enemy.name}-title`)//Character name beside health status
    .innerHTML =`${enemy.name} ${enemy.health}`
  }
};

//increase character health
Character.prototype.healthMe = function () {
  if (this.health < 100) this.health += this.strength;
  if (this.health > 100) this.health = 100;
  this.healingmsg.healingBar.style.width = `${this.health}%`;
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
