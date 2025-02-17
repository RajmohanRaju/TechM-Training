function digitsum(num)
{
    var sum=0
    while(num>0)
    {
        x=num%10
        sum=sum+x
        num=Math.floor(num/10)
        
    }
    console.log(sum)
    if(sum%2===0)
    {
        console.log("even number")
    }
    else
    {
        console.log("odd number")
    }
}
var h=prompt("enter the number you want to find : ")
digitsum(h)