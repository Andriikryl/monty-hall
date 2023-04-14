const doors = [];

function setup() {
  noCanvas();

  for (let i = 0; i < 3; i++) {
    doors[i] = createDiv("");
    doors[i].class("door");
    doors[i].prize = "goat";
  }

  let winningDoor = random(doors);
  winningDoor.prize = "prize";
}
