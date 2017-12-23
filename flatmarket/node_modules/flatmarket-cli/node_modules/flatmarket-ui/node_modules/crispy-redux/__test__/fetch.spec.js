/* global sinon */
var fetch = require('fetch')
var FetchError = require('FetchError')
var expect = require('chai').expect

describe('fetch()', function () {

    var stub

    afterEach(function () {
        stub.restore()
    })

    it('should resolve', function (done) {
        var url = '/foo'
        var options = {}
        var parsedResponse = { hello: 'world' }
        stub = sinon.stub(global, 'fetch', function () {
            return Promise.resolve({
                status: 200,
                json: function () {
                    return parsedResponse
                },
            })
        })
        fetch(url, options)
            .then(function (res) {
                expect(stub).to.have.callCount(1)
                expect(stub).to.have.been.calledWith(url, options)
                expect(res).to.equal(parsedResponse)
                return done()
            })
    })

    it('should reject', function (done) {
        stub = sinon.stub(global, 'fetch', function () {
            return Promise.resolve({
                status: 500,
            })
        })
        fetch()
            .then(function () {
                throw new Error('Should not resolve')
            })
            .error(function (err) {
                expect(err).to.be.an.instanceOf(FetchError)
                return done()
            })
    })

})
