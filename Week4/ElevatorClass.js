// Write a function Elevator that will return an object when called with the ’new’ keyword.
// The returned object should have three properties:
// - id
// - currentFloor (1-10)
// - direction (up, down, idle)

// And the following methods
// - reportStatus - prints “Elevator #{id} is at floor {floor}. Moving {direction}” If moving or just idle if it’s idle.
// - moveToFloor(floor) - sets the floor to the passed in parameter and direction to ‘idle'

class Elevator {
  constructor(id, currentFloor, direction) {
    // Check floor is in range (1-10)
    this.checkFloor(currentFloor);
    // Elevator Properties
    this.id = id;
    this.currentFloor = currentFloor;
    this.direction = direction;
  }

  // Elevator Methods
  reportStatus() {
    var direction;
    // Check elevator direction
    if (this.direction === "idle") {
      direction = `Elevator is idle.`;
    } else {
      direction = `Moving ${this.direction}`;
    }
    // print report
    console.log(
      `Elevator #${this.id} is at floor ${this.currentFloor}. ${direction}`
    );
  }
  moveToFloor(newFloor) {
    // Throws error if flood is out of range
    this.checkFloor(newFloor);
    // updates elevator floor
    this.currentFloor = newFloor;
    // sets direction to idle
    this.direction = "idle";
  }
  checkFloor(floor) {
    if (floor > 10 || floor < 1) {
      throw Error(`Floor: ${floor} is out of range (1-10)`);
    }
  }
}

// Driver code
let myElevator = new Elevator("333", 5, "up");
myElevator.reportStatus();
myElevator.moveToFloor(9);
myElevator.reportStatus();
