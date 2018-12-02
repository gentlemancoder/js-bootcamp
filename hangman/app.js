// product --> Object.prototype --> null
const product = {
    name: 'Infulence'
}

Object.prototype.someNewMethod = () => 'This is the new function'

// hasOwnProperty
console.log(product.hasOwnProperty(hasOwnProperty))
console.log(product.someNewMethod())