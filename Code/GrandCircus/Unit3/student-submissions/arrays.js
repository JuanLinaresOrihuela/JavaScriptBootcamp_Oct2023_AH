let submissions = [
    {
        name: "Jane",
        score: 95,
        passed: true,
    },

    {
        name: "Joe",
        score: 77,
        passed: true,
    },

    {
        name: "Jack",
        score: 59,
        passed: false,
    },

    {
        name: "Jill",
        score: 88,
        passed: true,
    }
];

// Declare a function named addSubmission.
function addSubmission (array, newName, newScore) {
    let newPassed;
    if (newScore >= 60) {
        newPassed = true;
    } else {
        newPassed = false;
    }
}

// Declare a function named deleteSubmissionByIndex.
function deleteSubmissionByIndex (array, index) {

}


// Declare a function named deleteSubmissionByName.
function deleteSubmissionByName (array, name) {

}


// Declare a function named editSubmission.
function editSubmission (array, index, score) {

}


// Declare a function named findSubmissionByName.
function findSubmissionByName (array, name) {

}


// Declare a a function named findLowestScore.
function findLowestScore (array) {
    return Math.min(array.score);
}


//Declare a function named findAverageScore.
function findAverageScore (array) {

}


// Declare a function named filterPassing.
function filterPassing (array) {

}


// Declare 