module.exports = function (initialState) {
    return function (state) {
        return initialState.map(function (val, key) {
            return state.get(key)
        }).toJS()
    }
}
