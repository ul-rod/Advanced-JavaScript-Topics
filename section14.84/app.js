'use strict';

class Room {
  constructor(name, capacity = 2) {
    this.name = name;
    this.capacity = capacity;
    this.available = true;
    this.schedule = [];
    this.company = "ABC Coop";
  }

  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  }

  getInfo() {
    var msg = `Name: ${this.name}` + "\n";
        msg += `Capacity: ${this.capacity}` + "\n";
        msg += `Available: ${this.available}`;

    return msg;
  }
};

class MeetingRoom extends Room {
}

class BreakRoom extends Room {
  constructor(name, capacity, hasKitchen, numTables) {
    super(name, capacity);
    this.hasKitchen = hasKitchen;
    this.numTables = numTables;
  }
}

class MeetingPod extends Room {
  constructor(name, hasPhone){
    super(name);
    this.hasPhone = hasPhone;
  }

  reserve(dtm) {
    this.schedule.push({ dtm, len: 30 });
  };
}

const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);
const lunchRoom = new BreakRoom('Lunch Room', 200, true, 40);
const pod = new MeetingPod('Meeting Pod', true);
