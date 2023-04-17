const infos = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text :`I'm ${infos.info.name} et je suis à la ${infos.info.campus}`,
    e : "pp",
    T : "U ",
} ) );

 