const path = require('path')

// Base file name
console.log('======== Base file name ========')
console.log(path.basename(__filename))

// Directory name
console.log('======== Directory name ========')
console.log(path.dirname(__filename))

// File extension
console.log('======== File extension ========')
console.log(path.extname(__filename))

// Create path object
console.log('======== Create path object ========')
console.log(path.parse(__filename))
console.log(path.parse(__filename).name)


//Concatenate path
console.log('======== Concatenate path ========')
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))

//
