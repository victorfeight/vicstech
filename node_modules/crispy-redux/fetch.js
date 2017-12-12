var FetchError = require('./FetchError')

module.exports = safeFetch

function parse(res) {
    return res.json()
}

function safeFetch(url, options) {
    return global.fetch(url, options)
        .then(verify)
        .then(parse)
}

function verify(response) {
    if (response.status >= 200 && response.status < 300) return response
    throw new FetchError(response)
}
