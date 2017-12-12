var stateTransformer = require('stateTransformer')
var expect = require('chai').expect
var fromJS = require('immutable').fromJS

describe('stateTransformer()', function () {

    var initialState

    beforeEach(function () {
        initialState = fromJS({
            hello: undefined,
            colors: undefined,
        })
    })

    it('should map state to a serialized Object', function () {
        var state = fromJS({
            hello: 'world',
            colors: ['red'],
            foo: 123,
        })
        var log = stateTransformer(initialState)(state)
        expect(log).to.deep.equal({
            hello: 'world',
            colors: ['red'],
        })
    })

})
