const chalk = require('chalk');
const fs = require('fs');
const readline = require('readline');

let foo = async() =>{
    return "valuee";
}

let bar = async()=>{
    console.log(await foo());
}

bar();