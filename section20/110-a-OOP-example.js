/**
 * OOP Approach
 */

// Constructor Function:
function UserRecord(id) {
    if (this instanceof UserRecord) {
        this.userId = id;
        this.questions = [];
    } else {
        return new UserRecord(id);
    }
}

// Prototype:
let userProto = {
    addQuestion: function(qID, response, result, weight) {
        this.questions.push({
            qID: qID,
            response: response,
            result: result,
            weight: weight

        });
    },
    get myScore() {
        let score = 0;
        for (let i = 0; i < this.questions.length; i++) {
            let quest = this.questions[i];
            if (quest.result) {
                score += quest.weight;
            }
        }
        return score;
    },
    get possScore() {
        let possible = 0;
        for (let i = 0; i < this.questions.length; i++) {
            possible += this.questions[i].weight;
        }
        return possible;
    }
};

// Attach the Prototype to the Constructor:
UserRecord.prototype = userProto;
UserRecord.prototype.constructor = UserRecord;

// Create two new users objects:
const user1 = new UserRecord(1);
const user2 = new UserRecord(2);

// User 1:
user1.addQuestion("q1", "answer", true, 1);
user1.addQuestion("q2", "wrong answer", false, 2);

// User 2:
user2.addQuestion("q1", "answer", true, 1);
user2.addQuestion("q2", "right answer", true, 2);

// Show the results:
console.log("user1 got " + user1.myScore + " out of " + user1.possScore);
console.log("user2 got " + user2.myScore + " out of " + user2.possScore);
