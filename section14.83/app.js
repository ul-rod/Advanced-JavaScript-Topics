'use strict';

/**
 * Constructor Pattern:
 */
const MeetingRoom = function(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.available = true;
  this.schedule = [];
};

MeetingRoom.prototype.reserve = function(dtm, len) {
  this.schedule.push({dtm, len});
};

MeetingRoom.prototype.company = "ABC Coop";


/**
 * Class Pattern:
 */
class TrainingRoom {
  constructor(name, capacity, co){
    this.name = name;
    this.capacity = capacity;
    this.available = true;
    this.schedule = [];
    this.company = co;
  }

  reserve(dtm, len) {
    this.schedule.push({ dtm, len });
  };
}

const trainingRoomA = new TrainingRoom('Training Room A', 20, 'Company A');

const trainingRoomB = new TrainingRoom('Training Room B', 35, 'Company B');
