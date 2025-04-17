let score = 75;
let grade;

if (score >= 80) {
    grade = "A";
} else if (score >= 60) {
    grade = "B";
} else if (score >= 40) {
    grade = "C";
} else {
    grade = "F";
}

console.log("Your grade is: " + grade);