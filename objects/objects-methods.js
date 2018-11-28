let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 73,

    seatParty: function(partySize) {
        if (this.checkAvailability(partySize))
        this.guestCount += partysize
    },

    removeParty: function(partySize) {
        this.guestCount -= partySize
    },

    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize < seatsLeft
    }
}

let status = restaurant.checkAvailability(4)

//

restaurant.seatParty(73)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(10)
console.log(restaurant.checkAvailability(4))
