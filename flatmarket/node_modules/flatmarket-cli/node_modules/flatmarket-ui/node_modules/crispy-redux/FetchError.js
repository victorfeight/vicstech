module.exports = FetchError

function FetchError(response) {
    this.message = 'Fetch error: ' + response.statusText
    this.name = 'FetchError'
    this.response = response
    this.stack = new Error().stack
}

FetchError.prototype = Object.create(Promise.OperationalError.prototype)
FetchError.prototype.constructor = FetchError
