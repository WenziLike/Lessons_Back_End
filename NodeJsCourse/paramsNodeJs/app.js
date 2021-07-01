// console.log(process) // получаем массив

const arg = process.argv

// console.log(arg)
// console.log(arg[2]) // получаем значение из массива

const a = +arg[2]
const b = +arg[3]

console.log(typeof b)

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

