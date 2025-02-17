function calculation()
{
    var op= prompt("enter the operation : ")
    var a = parseFloat(prompt("Enter the first number:")); 
    var b = parseFloat(prompt("Enter the second number:"));
    switch(op)
    {
    case "add":
    {
        console.log(a+b)
        break
    }
    case "sub":
    {
        console.log(a-b)
        break
    }
    case "mul":
    {
        console.log(a*b)
        break
    }
    case "div":
    {
        console.log(a/b)
        break
    }
    }
}
calculation()