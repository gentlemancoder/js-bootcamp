// Set up filters default object
let filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters =  (searchText,  hideCompleted) => {
    filters = {
        searchText,
        hideCompleted
    }
}

export { getFilters, setFilters}
// Make sure to set up the exports