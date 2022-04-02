import './style.css'

// #11

const input = 'Jacek Kamil Robert Piotr';

const initials = input
    .split(' ')
    .reduce((acc, name) => {
        return acc.concat(name.charAt(0))
    }, '')

console.log(initials)

// #12

const persons = [
    {
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
]

const maxMin = persons.reduce((acc, person) => {
        if (acc.max < person.age) {
            acc.max = person.age
        }
        if (acc.min === 0 || acc.min > person.age) {
            acc.min = person.age
        }
        return acc
    }, {
        max: 0,
        min: 0
    }
)
console.log(maxMin)

// #13

const letters = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
]
const lettersNum = letters
    .reduce((flattedArray, lettersArr) => flattedArray.concat(lettersArr), [])
    .reduce((acc, letter) => {
        if (letter in acc) {
            acc[letter]++
        } else {
            acc[letter] = 1
        }
        return acc
    }, {})
console.log(lettersNum)

// #14

const givenStrings = ['Mercedes', 'ReactJS', 'JavaScript', 'Przemyśl', 'Programista']

const countMiddleChars = givenStrings.reduce((acc, string) => {
    const firstChar = string.substr(0, 1)
    const lengthOfStringBody = string.substring(1, string.length - 1).length
    const lastChar = string.substr(string.length - 1)
    return acc += firstChar + lengthOfStringBody + lastChar
}, '')
console.log(countMiddleChars)

// #15

const givenData = [
    {type: "Add", value: 4},
    {type: "Multiply", value: 3},
    {type: "Divide", value: 2},
    {type: "Subtract", value: 3}
]

const calcData = givenData.reduce((acc, obj) => {
    const operation = obj.type
    switch (operation) {
        case 'Add':
            acc += obj.value
            break
        case 'Multiply':
            acc *= obj.value
            break
        case 'Divide':
            acc /= obj.value
            break
        case 'Subtract':
            acc -= obj.value
            break
    }
    return acc
}, 0)
console.log(calcData)

// #16

const objectifyMe = [
    ['x', 13],
    ['y', 'Hello'],
    ['z', false],
    ['q', 0]
]

const objectified = objectifyMe.reduce((acc, arr) => {
    acc[arr[0]] = arr[1]
    return acc
}, {})
console.log(objectified)

// #17

const createArr = givenData.reduce((acc, obj) => {
    const arr = []
    arr.push(obj.type, obj.value)
    acc.push(arr)
    return acc
}, [])
console.log(createArr)

// #18

const matches = [
    {name: 'Resovia', scores: [{didWin: true, points: 10}, {didWin: false, points: 5}, {didWin: false, points: 0}]},
    {name: 'Arka Gdynia', scores: [{didWin: false, points: 0}, {didWin: false, points: 5}, {didWin: true, points: 10}]},
    {name: 'Gornik Zabrze', scores: [{didWin: true, points: 10}, {didWin: true, points: 10}, {didWin: true, points: 10}]},
    {name: 'Lechia Gdańsk', scores: [{didWin: false, points: 5}, {didWin: false, points: 0}, {didWin: false, points: 5}]}
]