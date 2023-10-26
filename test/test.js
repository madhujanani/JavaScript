function deta(){
    let kk={
    form : document.getElementById("form"),
    hours:document.getElementById("hours"),
    Firstname :document.getElementById("txtnum1"),
    lastname : document.getElementById("txtnum2"),
    desig : document.getElementById("pob"),

    }

form.addEventListener("submit",function(e){

    e.preventDefault();
    let dd =kk.value;
    localStorage.setItem('fin',dd)
window.location.href ="test1.html";


})
}