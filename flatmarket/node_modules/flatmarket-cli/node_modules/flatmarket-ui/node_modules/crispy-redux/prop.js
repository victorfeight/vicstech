var get = require('lodash/get')
var has = require('lodash/has')

module.exports = prop

function prop(obj, path) {
    if (!has(obj, path)) throw new TypeError('Cannot get path ' + path)
    return get(obj, path)
}
