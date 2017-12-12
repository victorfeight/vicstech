var mapStateToProps = require('mapStateToProps')
var expect = require('chai').expect
var fromJS = require('immutable').fromJS

describe('mapStateToProps()', function () {

    var initialState

    beforeEach(function () {
        initialState = fromJS({
            hello: undefined,
            colors: undefined,
        })
    })

    it('should map state to an Object with initial properties', function () {
        var state = fromJS({
            hello: 'world',
            colors: ['red'],
            foo: 123,
        })
        var props = mapStateToProps(initialState)(state)
        expect(props).to.be.an.instanceOf(Object)
        expect(props.hello).to.equal(state.get('hello'))
        expect(props.colors).to.equal(state.get('colors'))
        expect(props.foo).to.equal(undefined)
    })

})
