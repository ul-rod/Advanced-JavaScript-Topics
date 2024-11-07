'use strict';

// Sort array of scores, lowest to highest:
const formatScores = function(scores) {
    if (!Array.isArray(scores)) {
        throw new Error('formatScores() expects an array as the argument.');
    }

    scores.sort((a, b) => a - b);
    return scores.join(', ');
};

// This is OK:
console.log(formatScores([100, 0, 50, 70, 85, 30]));

// This will cause an error:
console.log(formatScores("this is not an array"));
