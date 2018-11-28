let myAccount = {
    name: 'John Doe',
    expenses: 0,
    income: 0,
}

let addExpenses = function (account, amount){
    account.expenses += amount
}
let addIncome = function (account, amount){
    account.income += amount
}

let resetAccount = function (account){
    account.expenses =0
    account.income = 0
}

let getAccountSummary = function (account){
    return `Account for ${account.name} has $${account.income-account.expenses}, $${account.income} in income, $${account.expenses} in expenses.`
}

addIncome(myAccount, 500)
console.log(myAccount)
addExpenses(myAccount, 25)
console.log(myAccount)
console.log(getAccountSummary(myAccount))

resetAccount(myAccount)
console.log(myAccount)
