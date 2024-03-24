const rotate = require("./rotate.js");
const path = require("path");
const os = require("os");
const fs = require("fs");
const types = require("./types.js");
const readline = require("readline");
const chalk = require('chalk');
const validator = require('validator');

let arr = [1, 2 ,3, 4, 5, 6, 7];
let rotated = rotate(arr, 6);

// console.log(rotated);  //module untuk rotasi array (buatan sendiri)

// console.log(path.parse(__filename));  //module untuk file path

// console.log(os.version());  //module untuk operating system

// fs.readdir("./", function(err, data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// });

// console.log(fs.readdirSync("./"));

// console.log("ini pertama");

// console.log(types.PI);

// types.logStuff("aaa");
// types.student.print();

// fs.writeFileSync("./test", "hey im an auto generated text named test!"); ini harus sync karena fila harus sudah dibuat sebelum bisa di baca
// fs.writeFile("./a", "i made this text ansyncronously!", (err)=>{
//     console.log(err);
// });

// fs.readFile("./test", (err, d)=>{
//     if(!err){console.log(d);}
//     else {console.log(err);}
// });

// console.log(fs.readFileSync("./test","utf-8"));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("hey did you know, shikigami have red hands? \n", (ans)=>{
//     if(ans == "yes"){
//         console.log("i see, you are very knowledgeable");
//     }else if(ans == "no"){
//         console.log("i see, you have much to learn");
//     }else{
//         console.log("answer my question.");
//     }
//     rl.close();
// });

rl.question(chalk `{bgGreen.black what's your name?} \n`, (name)=>{
    rl.question(chalk `{bgGreen.black what's your phone number} \n`, (num)=>{ //untuk jalanin ini harus ada file contacts.json
        let data = {name,num};
        let file = fs.readFileSync("./contact.json");
        let contacts = JSON.parse(file);
        contacts.push(data);
        fs.writeFileSync("./contact.json", JSON.stringify(contacts));
        console.log(chalk `{bgGreen.black terimaksih telah menginput data mu :3}`);
        rl.close();
    })

})

// console.log(validator.isEmail("syafii2006@gmail.com"));
