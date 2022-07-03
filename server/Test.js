const cards = require("./FamilyPack.js")
const blacks = cards.black;

const stack = [];
for (let black of blacks) {
  console.log(`"${black.text}",`)
}