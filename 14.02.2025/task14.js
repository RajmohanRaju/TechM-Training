var start = Number(prompt("Enter the starting number: "));
var end = start + 30;  // Interval of 30

for (var i = start; i <= end; i++) {
    if (i % 7 === 0) {
        break;  // Stop if a multiple of 7 is found
    }
    else
    {
    console.log(i);
    }

        
    }
