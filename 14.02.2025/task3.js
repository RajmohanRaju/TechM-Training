
function prime(num)
{
    for(let i=2; i<num; i++)
    {
        if(num%i===0)
        {
            return false
        }
      
    }
    return true
}
if(prime(15))
{
    console.log("prime")
}
else
{
    console.log("not prime")
}



