let tech = ["html", "css", "js"]

tech.push("node.js")
tech.unshift("One item")

// tech.pop()
// tech.shift()

// console.log(tech.slice(1,))
// tech.splice(1,1)

let index = tech.indexOf('css')

tech.splice(index, 1)

console.log(tech)