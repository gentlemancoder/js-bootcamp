const account = {
    name: "John Doe",
    income: [],
    expenses: [],

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount})
    },

    
    addExpense:   function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount})
    },

    
    getAccountSummary : function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })

        let totalIncome = 0

        this.income.forEach(function (income) {
            totalIncome += income.amount
        })

        let accountBalance = totalIncome -  totalExpenses

        return `${this.name} has a balance of $${accountBalance}, $${totalIncome} in income, and $${totalExpenses} in expenses.`
        
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
