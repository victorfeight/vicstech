var chai = require('chai')
var sinonChai = require('sinon-chai')

Promise.onPossiblyUnhandledRejection(function (err) {
    throw err
})

chai.config.truncateThreshold = 0
chai.use(sinonChai)

var context = require.context('.', true, /\.spec\.js$/)
context.keys().forEach(context)
