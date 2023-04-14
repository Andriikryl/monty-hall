const doors = [];
const state = "PICK";

function setup() {
  noCanvas();

  for (let i = 0; i < 3; i++) {
    doors[i] = createDiv("");
    doors[i].class("door");
    doors[i].prize = "goat";

    doors[i].index = i;
    doors[i].mousePressed(reveal);
  }

  let winningDoor = random(doors);
  winningDoor.prize = "prize";
}

function reveal() {
  console.log(this.index);

  const options = [];
  for (let i = 0; i < doors.length; i++) {
    const door = doors[i];
    if (i !== this.index && door.prize !== "prize") {
      options.push(door);
    }
  }

  this.style("background-color", "#AFA");

  const doorReveal = random(options);
  doorReveal.html(doorReveal.prize);
}
