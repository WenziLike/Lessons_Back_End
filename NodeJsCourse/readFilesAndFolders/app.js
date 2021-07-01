const fs = require('fs')
const path = require('path')

// Читаем файл
//way 1
fs.readFile('mainTxt.txt', 'utf-8', (err, data) => {
    // console.log(data)
})
//way2
const text = fs.readFileSync('main.txt', 'utf-8')
// console.log(text)
// console.log('==========================')


// читаем папки
fs.readdir('one', (err, data) => {
    console.log(data)
    data.forEach(file => {
        // console.log('Получаем имена файлов: ' + file) // получаем файлы
        // console.log(path.extname(file)) // получаем расширение файла
        // console.log(fs.statSync('one/' + file).size) //  получаем размер папки
        console.log(file + ' \t\t' + path.extname(file) + '\t\t' + fs.statSync('one/' + file).size + 'b')
    })
})

// запись файлов
fs.writeFile('newFile.txt', 'go go go', (err) => {
    if (err) console.log(err)
})