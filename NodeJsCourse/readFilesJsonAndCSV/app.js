const fs = require('fs')
const path = require('path')
const student = require('./one.json')
const csv = require('csv-parser')

fs.writeFile('one.txt', 'work', err => {
    if (err) console.log('Error')
})

/**
 * Case 1. Записываем json file
 */

const man = {
    name: 'Slava',
    age: 'Mur',
    department: 'History',
    car: 'audi'
}

fs.writeFile('one.json', JSON.stringify(man), err => {
    if (err) console.log('Error')
})

/**
 * Case 2. Читаем json file
 */

console.log(student)

/**
 * Case 3. Читаем CSV file
 */
const results = []
// fs.createReadStream('table.csv')
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//         console.log(results)
//     })

/**
 * Case 4. Пишем CSV file
 */



