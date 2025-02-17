var firstNum = Number(prompt("Enter the first number: "));
var secondNum = Number(prompt("Enter the second number: "));

var thirdNum = secondNum + 40;

var i = secondNum;
while (i <= thirdNum) {
    if (i % firstNum === 0) {
        console.log(i);
    }
    i++;
}
