var mathsScore = Number(prompt("Enter the Maths score: "));

if (mathsScore === 100) {
    console.log("Phenomenal!");
} else if (mathsScore > 85) {
    console.log("Excellent!");
} else if (mathsScore >= 71 && mathsScore <= 85) {
    console.log("Good work!");
} else if (mathsScore >= 51 && mathsScore <= 70) {
    console.log("Practice well!");
} else {
    console.log("Hard work is needed.");
}
