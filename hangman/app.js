// Primitive values: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String : myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Booloean: myBool --> Boolean.prototype --> Object.prototype --> null

// Strings numbers and bools are all primitives, but the have object wrappers. i.e. when you call a method on them JS coerces them into objects
const product = 'Computer'
console.log(product)

const otherProduct = new String('Phone')
console.log(otherProduct)