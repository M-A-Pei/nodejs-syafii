const fs = require("fs");
const chalk = require("chalk");
const readline = require("readline");
const validator = require('validator');

let exists = fs.existsSync("./contacts.json");

const error = chalk.red.inverse;
const question = chalk.bgCyan.black;
const success = chalk.bgGreen.black;

if(!exists){
    fs.writeFileSync("./contacts.json", "[]");
    rl.close();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pertanyaan = (p) => {
    return new Promise((resolve, reject) => {
        rl.question(question(`${p} \n`), (name) => {
            resolve(name);
        });
    });
}

const simpanContact = (data) => {
    let file = JSON.parse(fs.readFileSync("./contacts.json", "utf-8"));
    let duplikat = file.find((contacts)=>{return contacts.email === data.email});

    if(!validator.isEmail(data.email)){console.log(error(`ini bukan email`)); rl.close(); return false}

    if(duplikat) {
        console.log(error(`email sudah ada`));
        rl.close();
        return false;
    }

    file.push(data);
    fs.writeFileSync("./contacts.json", JSON.stringify(file));
    console.log(success(`terimakasih untuk informasi mu \n`));
    rl.close();
}

const tampilList = () =>{
    let file = JSON.parse(fs.readFileSync("./contacts.json", "utf-8"));
    console.log(chalk `{bgYellow.black contact list: }`);
    file.forEach((element, i) => {
        console.log(`(${i+1}) ${element.nama} -- ${element.no}`);
    });
}

const deleteList = (nama) =>{
    let file = JSON.parse(fs.readFileSync("./contacts.json", "utf-8"));
    file.forEach((element, i) => {
        if(element.nama === nama){
            file.splice(i, 1);
            fs.writeFileSync("./contacts.json", JSON.stringify(file));
            console.log(chalk `{bgRed.black ${element.nama} telah di hapus dari daftar contact}`);
        }
    });
}

module.exports = {simpanContact, tampilList, deleteList, pertanyaan};