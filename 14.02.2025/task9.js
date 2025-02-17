var year=parseFloat(prompt("enter the year : "))
var month = parseFloat(prompt("enter the month : "))

if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0)
{
    if(month===2)
    {
        console.log("this is a leap year february")
    }
    else 
    {
        console.log("this is a leap year")
    }
}
else 
{
    console.log("this is not a leap year")
}