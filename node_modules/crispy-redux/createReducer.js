var fromJS = require('immutable').fromJS
var get = require('lodash/get')
var identity = require('lodash/identity')

module.exports = function (actionMap, getInitialState) {
    actionMap = actionMap || {}
    getInitialState = getInitialState || getDefaultInitialState
    return function (state, action) {
        if (!state) state = getInitialState()
        return (actionMap[get(action, 'type')] || identity)(state, get(action, 'payload'))
    }
}

function getDefaultInitialState() {
    return fromJS({})
}
