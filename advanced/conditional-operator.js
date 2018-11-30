// const myAge = 33
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 33
const showPage = ( ) => {
    console.log('Showing the page')
}
const showErrorPage = ( ) => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Tyler', 'Porter', 'Jim', 'Fred', 'Alex']

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log("Too many people on your team.")