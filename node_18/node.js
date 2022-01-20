const fs = require("fs")
const superheroes = require('superheroes');
const supervillains = require('supervillains');

fs.copyFileSync("file1.txt", "file2.txt")

let myHero = superheroes.random()
let myVillain = supervillains.random()

console.log(myHero);
console.log(myVillain);