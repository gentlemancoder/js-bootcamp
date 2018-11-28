let name = ' Andrew Mead '

// Length Property
console.log(name.length)

// Convert to upper case

console.log(name.toUpperCase())


// Convert to lower case

console.log(name.toLowerCase())

// Includes method
let password = 'abc123safad098'
console.log(password.includes('password'))

// Trim Method
console.log(name.trim())

// Challenge area

let isValidPassword = function(password){
   return (password.length > 8 && !password.includes('password'))
    }

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123~!@#$%^'))
console.log(isValidPassword('asdfpasswordoasedsfvs'))
