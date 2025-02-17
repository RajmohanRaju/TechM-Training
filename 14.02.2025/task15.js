var start = Number(prompt("Enter the starting number: "));
var end = start + 50;  // Interval of 50

for (var i = start; i <= end; i++) {
    if (i % 5 === 0) {
        continue;  // Skip multiples of 5
    }
    console.log(i);
}
