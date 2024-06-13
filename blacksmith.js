// Variables
let wood = 50;
let gold = 45;
let ore = 0;
let axe =  0;
let sword = 0;

let fireStatus = false;

//for make


//for sell
let total;

// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire() {
  
  if (fireStatus === false && wood > 0) {
    fireStatus = true;
    wood--;
    console.log("The fire is going.");
  } else if (fireStatus === true) {
    fireStatus = false;
    console.log("The fire is out.");
  } else {
    console.log(`You do not have enough wood.
  Buy wood using the buy('wood')command`);
  }
}
/**
 * buy
 */
function buy(item) {
  if (item === "ore" && gold >= 3 && fireStatus === false) {
    ore = ore + 1;
    gold = gold - 3;
    console.log("You bought 1 ore.");
  } else if (item === "wood" && (gold >= 1) & (fireStatus === false)) {
    wood++;
    gold--;
    console.log("You bought one wood.");
  } else if (fireStatus === true) {
    console.log("Go back to your fireplace! You can get nothing");
  } else if (gold < 1) {
    console.log("You can get nothing. Go back to earn money.");
  }
}


/**
 * make
 */
function make(item) {
  if (item === "sword") {
    if(ore < 2){
      console.log(`You need ${2-ore} more ores`)
      return 
    }
    if ( wood < 1){
      console.log("You nedd at least 1 wood")
      return
    }
    sword++;
    ore = ore - 2;
    wood--;
    console.log("You make one sword.");
  } else if (item === "axe" && ore >= 1 && wood >= 2) {
    axe++;
    ore--;
    wood = wood - 2;
  } else if (ore < 1) {
    console.log(`'You made no weapon.'
                Buy ore using the (buy) command.`);
  } else if (wood < 1) {
    console.log(`'You made no weapon.'
                 Buy ore using the (buy) command.`);
  }
}

/**
 * sell
 */
function sell(item) {
  if (item === "sword" && fireStatus === false) {
    gold = gold + 5;
    console.log("You sold one sword.");
  } else if (item === "axe" && fireStatus === false) {
    gold = gold + 4;
    console.log("You just sold one axe.");
  } else if (fireStatus === true || item === null) {
    console.log("You sold nothing.");
  }
}

/**
 * inventory
 * Shows the players current inventory
 */
function inventory() {
  console.log("gold: ", gold);
  console.log("wood: ",wood);
  console.log("Ore: " ,ore);
  console.log("Sword: ",sword);
  console.log("Axe: ",axe);
}

/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help() {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item: wood | ore | stone)
  - make(item: sword | axe)
  - sell(item: sword | axe)
  - fire()
  - inventory()
  - help();`
}

// Log the help() function
console.log(help());
