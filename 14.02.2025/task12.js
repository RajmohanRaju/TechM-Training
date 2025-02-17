var num = Number(prompt("Enter the number for the multiplication table: "));
var limit = Number(prompt("Enter the limit for the table: "));

var i = 1;
while (i <= limit) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;
}
