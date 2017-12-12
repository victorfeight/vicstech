var createReducer = require('createReducer')
var expect = require('chai').expect
var fromJS = require('immutable').fromJS

describe('createReducer()', function () {

    it('should create a default reducer', function () {
        var reducer = createReducer()
        expect(reducer().toJS()).to.deep.equal({})
    })

    it('should create a reducer that returns the initial state', function () {
        var reducer = createReducer({}, getInitialState)
        expect(reducer().toJS()).to.deep.equal({ hello: 'world' })
    })

    it('should create a reducer that returns the current state', function () {
        var reducer = createReducer({}, getInitialState)
        expect(reducer(fromJS({ hello: 'again' })).toJS()).to.deep.equal({ hello: 'again' })
    })

    it('should create a reducer that returns the reduction', function () {
        var actionMap = {
            update: function (state, payload) {
                return state.set('hello', payload)
            },
        }
        var reducer = createReducer(actionMap, getInitialState)
        expect(reducer(undefined, {
            type: 'update',
            payload: 'again',
        }).toJS()).to.deep.equal({ hello: 'again' })
    })

})

function getInitialState() {
    return fromJS({ hello: 'world' })
}
