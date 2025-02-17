function divisible(num)
{
    if(num%7===0)
    {
        console.log("it is divisible by 7")
    }
    else 
    {
        console.log("it is not divisible by 7")
    }
}
const inp=prompt("enter the value of the number ti be checked : ")
divisible(inp)