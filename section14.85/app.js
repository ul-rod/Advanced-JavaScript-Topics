'use strict';

class MeetingRoom {
  // Private Props:
  #name;
  #capacity;
  // Public Props:
  available = true;
  schedule = [];

  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
  }

  reserve(dtm, len) {
    this.schedule.push({dtm, len});
  }

  get capacity() {
    return this.#capacity;
  }

  get name() {
    return this.#name;
  }

  set capacity(num) {
    if (num < this.#capacity) {
      this.#capacity = num;
    } else {
      throw new Error("You are not allowed to increase the capacity of this room!");
    }
  }

  set name(val) {
    this.#name = val;
  }
};

MeetingRoom.prototype.company = "ABC Coop";


const boardRoom = new MeetingRoom('Board Room', 20);
const trainingRoomA = new MeetingRoom('Training Room A', 35);
