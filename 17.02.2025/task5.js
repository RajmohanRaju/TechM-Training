var student={
    id : 246,
    name : "RAJ",
    dept : "ECE",
    college : "PEC",
    email : "raj@gmail.com",
    address : {
        doorNo: "123",
        street: "Main Street",
        area: "Downtown",
        pincode: "123456"
    },

display1: function()
{
    console.log("ID: " + this.id);
    console.log("name "+this.name)
    console.log("dept" +this.dept)
    console.log("college"+this.college)
    console.log("email"+this.email)
    console.log("Address:");
        console.log("  Door No: " + this.address.doorNo);
        console.log("  Street: " + this.address.street);
        console.log("  Area: " + this.address.area);
        console.log("  Pincode: " + this.address.pincode);

},


display2: function()
{
    console.log("ID: " + this.id);
    console.log("name " +this.name)
    console.log("email " +this.email)
},

display3: function()
{
    console.log("id " +this.id)
    console.log("name "+this.name)
    console.log("Address:");
        console.log("  Door No: " + this.address.doorNo);
        console.log("  Street: " + this.address.street);
        console.log("  Area: " + this.address.area);
        console.log("  Pincode: " + this.address.pincode);
}

};

student.display1();
student.display2();
student.display3();

delete student.email;

delete student.display2;


student.display1();
student.display3();