const fs = require('fs')
const path = require('path')
const student = require('./one.json')
const csv = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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

const csvWriter = createCsvWriter({
    path: 'test.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'surname', title: 'LastName'},
        {id: 'age', title: 'AGE'},
        {id: 'gender', title: 'G'}
    ]
});

const data = [
    {
        name: 'John',
        surname: 'Doe',
        age: 24,
        gender: 'M'
    },
    {
        name: 'Slava',
        surname: 'Mur',
        age: 32,
        gender: 'M'
    },
    {
        name: 'Ada',
        surname: 'Jens',
        age: 23,
        gender: 'W'
    },
    {
        name: 'Ola',
        surname: 'Click',
        age: 30,
        gender: 'W'
    },
    {
        name: 'Din',
        surname: 'Don',
        age: 45,
        gender: 'M'
    },
]

csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });

