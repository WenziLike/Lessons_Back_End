const fs = require('fs')
const path = require('path')

const jsonFilePerson = {
    firstName: 'Viacheslav',
    lastName: 'Murakhin',
    age: 32,
    country: 'Kraków',
    address: 'Rogatka 7/49A',
    postIndex: '32-425'

}.toLocaleString()

// Create folder
// console.log('======== Create folder ========')
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// })

// Create and write to file
console.log('======== Create and write to file ========')

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
    if (err) throw err;
    console.log('File written to...')
})

// File append
console.log('======== File append ========')

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nWelcome Node.js', err => {
    if (err) throw err;
    console.log('File written to Two ...')
})

// Read file
console.log('======== File Read ========')
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

//Rename file
console.log('======== File Renamed ========')
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloNode.js'),
    err =>{
        if(err){
            console.log('File renamed...')
        }
    }
)


