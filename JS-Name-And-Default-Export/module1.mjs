
// import family from './module2.mjs'
import family, {a, b, c, d} from './module2.mjs'


console.log("Default Export: " + family)
console.log("Named Export: ")
console.log("\t" + a)
console.log("\t" + b)
console.log("\t" + c)
console.log("\t" + d)

// Run command: node .\module1.mjs