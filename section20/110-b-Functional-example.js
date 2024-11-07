/**
 * Functional Approach
 */

// Function to clone objects:
const clone = (o) => JSON.parse(JSON.stringify(o));

// Function to create a user object:
const createUser = function(id) {
    return {
        userId: id,
        questions: []
    };
};

// Function that clones the Questions object and adds a new question
// to the clone.
// Note: We clone the object so we will not mutate the original object:
const addQuestion = function(user, qID, response, result, weight) {
    // Clone the questions obj.
    const questions = clone(user.questions);
    const newQuestion = {
        qID: qID,
        response: response,
        result: result,
        weight: weight
    };
    return {
        userId: user.userId,
        questions: [...questions, newQuestion]
    };
}

const calcScore = function(user) {
    return user.questions.reduce((tot, quest) => tot + (quest.result ? quest.weight : 0), 0);
}

const calcPossible = function(user) {
    return user.questions.reduce((tot, quest) => tot + quest.weight, 0);
}

// We declare a new variable each time so we don't mutate.
// However, for ease this strict pattern may not make sense
// to follow always.
const user1 = createUser(1);
const user2 = createUser(2);

const user1a = addQuestion(user1, "q1", "answer", true, 1);
const user1b = addQuestion(user1a, "q2", "wrong answer", false, 2);

const user2a = addQuestion(user2, "q1", "answer", true, 1);
const user2b = addQuestion(user2a, "q2", "right answer", true, 2);

console.log("user1 got " + calcScore(user1b) + " out of " + calcPossible(user1b));
console.log("user2 got " + calcScore(user2b) + " out of " + calcPossible(user2b));
