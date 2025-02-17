var mon= parseFloat(prompt("enter the mon price : "))
var tue= parseFloat(prompt("enter the tue price : "))
var wed= parseFloat(prompt("enter the wed price : "))
var thu= parseFloat(prompt("enter the thu price : "))
var fri= parseFloat(prompt("enter the fri price : "))
var sat= parseFloat(prompt("enter the sat price : "))
var sun= parseFloat(prompt("enter the sun price : "))

var average = (mon+tue+wed+thu+fri+sat+sun)/7
console.log(average)
if (average >=50)
{
console.log("tomato has given good profit")
}
else 
{
    console.log("there is no profit in tomoto")
}
