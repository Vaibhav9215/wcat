let fs = require("fs");
// input
let inputArr = process.argv.slice(2);
// console.log(inputArr);
// options
let optionArr = [];
let filesArr = [];
for(let i = 0; i < inputArr.length; i++){
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-"){
        optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}
// identify -> options

for (let i = 0; i < filesArr.length; i++) {
    let ans =fs.existsSync(filesArr[i]);
    if (ans  == false) {
        console.log("File doesn't exist ");
    return;
    }}
  
     let content = "";
    for (let i = 0; i < filesArr.length; i++){
        let cFileContent = fs.readFileSync(filesArr[i])
        content = content + fs.readFileSync(filesArr[i]) + "\r\n";
    }
    let contentArr = content.split("\r\n");
// console.log(optionArr);
// s check
function sCheck(){
    let isSPresent = optionArr.includes("-s");
    if (isSPresent){
    for  (let i = 0; i < contentArr.length; i++){
        if (contentArr[i] == "" && contentArr[i -1] == ""){
        contentArr[i] = null;
        }
        else if (contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] = null;
    }
}
let tempArr= [];
for(let i = 0; i < contentArr.length; i++){
    if (contentArr[i] !== null){
        tempArr.push(contentArr[i]);
    }
}
contentArr = tempArr;
}}
//n check
function nCheck(){
let isNPresent = optionArr.includes("-n");
if (isNPresent == true) {
   for (let i = 0; i < contentArr.length; i++) {
       contentArr[i] = `${i + 1} ${contentArr[i]} `;
    }
}}
//b check 
function bCheck(){
let isBPresent = optionArr.includes("-b");
if (isBPresent == true) {
   let counter = 1
   for (let i = 0; i < contentArr.length; i++) {
       if (contentArr[i] != "") {
          //contentArr[i] = `${i + 1} ${contentArr[i]} `;
           contentArr[i] = `${counter} ${contentArr[i]}`;
           counter++;
        }
    }
   }
   //console.log(contentArr.join("\n"));
}
 // both n and b
 if (optionArr.includes("-b") && optionArr.includes("-n"))
    {
    for (let i = 0; i < optionArr.length; i++){
       if(optionArr[i]== "-b"){
        bCheck();
         break;
       }
       if(optionArr[i] == "-n"){
        nCheck();
         break;
       }
       }
    sCheck();
 }
 else{
    sCheck();
     bCheck();
     nCheck();
 }
console.log(contentArr.join("\n"));