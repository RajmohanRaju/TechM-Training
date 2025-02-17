function factors(number)
{
    console.log("the factors of "+number+ " are ")
    for(var i=1; i<number; i++)
    {
        if(number%i===0)
        {
            console.log(i)
        }
    }
}
var x= prompt("enter the number you want to find the factorial : ")
factors(x)