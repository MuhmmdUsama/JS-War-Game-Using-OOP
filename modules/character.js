export function Character(name, strength, health) {
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