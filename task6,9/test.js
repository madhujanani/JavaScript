
// //USING FUNCTION
// //========================================
// function send(){    

//     let details={
//     // Name:document.getElementById("txtnum1").value,
//     // Employee_id:document.getElementById("empid").value,
//     // Joining_date:document.getElementById("doj").value,
//     // Designation:document.getElementById("pob").value,
//     // Hours_worked:document.getElementById("hours").value
//     Name:$("#txtnum1").val(),
//     Employee_id:$("#empid").val(),
//     Joining_date:$("#doj").val(),
//     Designation:$("#pob").val(),
//     Hours_worked:$("#hours").val()

    
// }
// let salary
// if (details.Designation=="Manager") {
//     salary = details.Hours_worked*90;
// } else if(details.Designation=="Consultant") {
//     salary= details.Hours_worked*70;
// }
// else if(details.Designation=="Trainee".localeCompare){
//     salary =details.Hours_worked*45;
// }
// alert("hello world")
// //use this if you  want to get all the details which we give in form 
// //localStorage.setItem("itemvalue", JSON.stringify(details))
// let textValue ="Hello   "+ details.Name +"    "+"you  are  a  awesome    "+"    "+details.Designation +"   "+ "    and  proudly  get  a  salary  of  $ "+ salary;
// localStorage.setItem("itemvalue", JSON.stringify(textValue))

// }
// // console.log("===========================================================================================")




//USING CLASS
//=================================================

class Employee {
    constructor(name, design, workhrs,joiningDate,empid,sal) {
    this.name = name;
    this.design = design;
    this.workhrs = workhrs;
    this.joiningDate=joiningDate;
    this.empid = empid
    this.sal =sal
    }
}
function send()
{
    let name=$("#txtnum1").val();
    let empid=$("#empid").val();
    let joiningDate=$("#doj").val();
    let design=$("#pob").val();
    let workhrs=$("#hours").val();
    let sal;
    if (design === "Manager" ){
        sal= 90*workhrs;
    }
    else if (design === "Consultant"){
        sal=75*workhrs;
    }  
    else if(design === "Trainer"){
        sal=50*workhrs;
    } 
    let newEmployee = new Employee(name,design,workhrs,joiningDate,empid,sal);
    alert("Data Send")
    localStorage.setItem("itemvalue",JSON.stringify(newEmployee));
}

