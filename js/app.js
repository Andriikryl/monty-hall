const doors = [];
const state = "PICK";
let pickedDoor;
let revealedDoor;

function setup() {
  noCanvas();

  for (let i = 0; i < 3; i++) {
    doors[i] = createDiv("");
    doors[i].parent("#doors");
    doors[i].class("door");
    doors[i].prize = "goat";

    doors[i].index = i;
    doors[i].mousePressed(pickDoor);
  }

  let winningDoor = random(doors);
  winningDoor.prize = "prize";
}

function pickDoor() {
  this.style("background-color", "#AFA");
  pickedDoor = this;
  reveal();
}

function reveal() {
  const options = [];
  for (let i = 0; i < doors.length; i++) {
    const door = doors[i];
    if (i !== pickedDoor.index && door.prize !== "prize") {
      options.push(door);
    }
  }

  revealedDoor = random(options);
  revealedDoor.html(revealedDoor.prize);

  const switchButton = createButton("switch");
  switchButton.mousePressed(playerSwitch);

  const stayButton = createButton("stay");
  stayButton.mousePressed(checkWin);
}

function playerSwitch() {
  let newPick;

  for (let i = 0; i < doors.length; i++) {
    let door = doors[i];
    if (door !== pickDoor && door !== revealedDoor) {
      newPick = door;
      break;
    }
  }
  pickDoor = newPick;
  checkWin();
}

function checkWin() {
  if (pickedDoor.prize == "prize") {
    createP("You win!");
    pickedDoor.style("background-color", "#AFA");
  } else {
    createP("You lose!");
    pickedDoor.style("background-color", "#FAA");
  }

  for (let door of doors) {
    door.html(door.prize);
  }
}
