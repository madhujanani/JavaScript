function send(){    

    let details={
    // Name:document.getElementById("txtnum1").value,
    // Employee_id:document.getElementById("empid").value,
    // Joining_date:document.getElementById("doj").value,
    // Designation:document.getElementById("pob").value,
    // Hours_worked:document.getElementById("hours").value
    Name:$("#txtnum1").val(),
    Employee_id:$("#empid").val(),
    Joining_date:$("#doj").val(),
    Designation:$("#pob").val(),
    Hours_worked:$("#hours").val()

    
}
let salary
if (details.Designation=="Manager") {
    salary = details.Hours_worked*90;
} else if(details.Designation=="Consultant") {
    salary= details.Hours_worked*70;
}
else if(details.Designation=="Trainee".localeCompare){
    salary =details.Hours_worked*45;
}
alert("hello world")
//use this if you  want to get all the details which we give in form 
//localStorage.setItem("itemvalue", JSON.stringify(details))
let textValue ="Hello   "+ details.Name +"    "+"you  are  a  awesome    "+"    "+details.Designation +"   "+ "    and  proudly  get  a  salary  of  $ "+ salary;
localStorage.setItem("itemvalue", JSON.stringify(textValue))

}
console.log("===========================================================================================")

