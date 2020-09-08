// Write a function Elevator that will return an object when called with the ’new’ keyword.
// The returned object should have three properties:
// - id
// - currentFloor (1-10)
// - direction (up, down, idle)

// And the following methods
// - reportStatus - prints “Elevator #{id} is at floor {floor}. Moving {direction}” If moving or just idle if it’s idle.
// - moveToFloor(floor) - sets the floor to the passed in parameter and direction to ‘idle'

// Defining elevator methods
const elevatorMethods = {
  reportStatus: function () {
    var direction = "";
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
  },
  moveToFloor: function (newFloor) {
    // Throws error if flood is out of range
    this.checkFloor(newFloor);
    // updates elevator floor
    this.currentFloor = newFloor;
    // sets direction to idle
    this.direction = "idle";
  },
  checkFloor: function (floor) {
    if (floor > 10 || floor < 1) {
      throw Error(`Floor: ${floor} is out of range (1-10)`);
    }
  },
};

// Elevator Constructor Function
function Elevator(id, currentFloor, direction) {
  // Throws error if flood is out of range before creating object
  elevatorMethods.checkFloor(currentFloor);
  // Create new Elevator and link to methods
  const elevator = Object.create(elevatorMethods);
  // Elevator Properties
  elevator.id = id;
  elevator.currentFloor = currentFloor;
  elevator.direction = direction;
  // Return New Elevator Object
  return elevator;
}

// Driver code
let myElevator = new Elevator("333", 4, "up");
myElevator.reportStatus();
myElevator.moveToFloor(8);
myElevator.reportStatus();
