const url = require('url')

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log('======== Serialized URL ========')
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log('======== Host ========')
console.log(myUrl.host)

// Host Name (does not get port)
console.log('======== Host Name (does not get port) ========')
console.log(myUrl.hostname)

// Path Name
console.log('======== Path Name ========')
console.log(myUrl.pathname)

// Serialized query
console.log('======== Serialized query ========')
console.log(myUrl.search)

// Params object
console.log('======== Params object ========')
console.log(myUrl.searchParams)

// Add param
console.log('======== add param ========')
myUrl.searchParams.append('SlavaMur', '123')
console.log(myUrl.searchParams)

// Loop through params
console.log('======== Loop through params ========')
myUrl.searchParams
    .forEach((value, name) => console.log(`${name}: ${value}`))