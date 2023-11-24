// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
      this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);

        this.name = name;
        
    }
    
    receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
    } else if (this.health <= 0) {
        return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }
 
}
 

// Saxon
class Saxon extends Soldier {
    constructor( health, strength) {
        super(health, strength);
        
    }
    
    receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0) {
        return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];      
    }

   addViking(newViking) {
    this.vikingArmy.push(newViking);
   }

   addSaxon(newSaxon) {
    this.saxonArmy.push(newSaxon);
   }

   vikingAttack(){
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    
   }

   saxonAttack(){

   }
   
   showStatus() {
    if (this.saxonArmy.length === 0) {
        return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
        return `Saxons have fought for their lives and survived another day...`
    } else {
    return `Vikings and Saxons are still in the thick of battle.`
    }
    
   }

}
