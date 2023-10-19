/*for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){

        process.stdout.write("*")
    }
    console.log("")
}
for(var z = 1; z<10; z++){
    if(z==5){
        continue
    }
    console.log(z)
}*/
// program to check the number of occurrence of a character


const str ="Hi there, ! How is your day today ?";
const letter ='H';
function countString(str, letter) {
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == letter.toLowerCase()) {
            count += 1;
        }
    }
    return count;
}
const result = countString(str, letter);
console.log(str);
console.log("You selected the Letter :  " +letter);
console.log("The  letter "+letter   +" occurs "  +result+  " times in the string");


