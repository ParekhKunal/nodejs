const fs = require('fs');
const http = require('http');

//Blocking, Synchronous Code
console.log('Blocking, Synchronous Code');
const txt = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(txt);
const inputText = `This is what we know about the node js: ${txt}. \n Created on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', inputText);
console.log('File Written \n');

//Non - blocking, Asynchronous
console.log('Non - blocking, Asynchronous Code');
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {

    if(err) return console.log('Error');
    
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2} ${data3}`,'utf-8', err => {
                console.log('File Written');
            })
        })
    })
});