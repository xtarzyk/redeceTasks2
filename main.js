import './style.css'

// #11

const input = 'Jacek Kamil Robert Piotr';

const initials = input
    .split(' ')
    .reduce((acc, name) => acc.concat(name.charAt(0)), '')

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
    return acc += firstChar + lengthOfStringBody + lastChar + ' '
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
    {
        name: 'Resovia',
        scores: [
            {didWin: true, points: 10},
            {didWin: false, points: 5},
            {didWin: false, points: 0}
        ]
    },
    {
        name: 'Arka Gdynia',
        scores: [
            {didWin: false, points: 0},
            {didWin: false, points: 5},
            {didWin: true, points: 10}
        ]
    },
    {
        name: 'Gornik Zabrze',
        scores: [
            {didWin: true, points: 10},
            {didWin: true, points: 10},
            {didWin: true, points: 10}
        ]
    },
    {
        name: 'Lechia Gdańsk',
        scores: [
            {didWin: false, points: 5},
            {didWin: false, points: 0},
            {didWin: false, points: 5}
        ]
    }
]

const matchesResult = matches.reduce((acc, team) => {
    const pointsTotal = team.scores.reduce((pointsSum, cur) => pointsSum += cur.points, 0)
    acc.scoresSum[team.name] = pointsTotal
    acc.numberOfMatches += team.scores.length
    if (acc.scoresSum[team.name] > pointsTotal) {
        acc.winner = team.name
    }
    return acc
}, {scoresSum: {}, numberOfMatches: 0, winner: '', loser: ''})
console.log(matchesResult)

// #19

const data = [
    {v: 15, time:'2021-06-11T06:45:40.704Z', gear: 1},
    {v: 92, time: '2021-06-11T06:45:45.704Z', gear: 4},
    {v: 52, time: '2021-06-11T06:45:12.704Z', gear: 2},
    {v: 72, time: '2021-06-11T06:45:10.704Z', gear: 3}, // start
    {v: 126, time: '2021-06-11T06:45:41.704Z', gear: 5},
    {v: 26, time: '2021-06-11T06:45:34.704Z', gear: 1},
    {v: 13, time: '2021-06-11T06:46:00.704Z', gear: 1},
    {v: 45, time: '2021-06-11T06:46:24.704Z', gear: 2},
    {v: 41, time: '2021-06-11T06:46:04.704Z', gear: 2},
    {v: 136, time: '2021-06-11T06:46:23.704Z', gear: 5},
    {v: 157, time: '2021-06-11T06:46:27.704Z', gear: 5},
    {v: 132, time: '2021-06-11T06:46:20.704Z', gear: 5},
    {v: 22, time: '2021-06-11T06:46:05.704Z', gear: 1},
    {v: 42, time: '2021-06-11T06:46:03.704Z', gear: 2},
    {v: 72, time: '2021-06-11T06:46:57.704Z', gear: 3},
    {v: 81, time: '2021-06-11T06:46:38.704Z', gear: 3},
    {v: 46, time: '2021-06-11T06:46:44.704Z', gear: 2},
    {v: 23, time: '2021-06-11T06:46:48.704Z', gear: 2},
    {v: 75, time: '2021-06-11T06:46:27.704Z', gear: 3},
    {v: 55, time: '2021-06-11T06:46:14.704Z', gear: 3},
    {v: 110, time: '2021-06-11T06:47:00.704Z', gear: 4},
    {v: 112, time: '2021-06-11T06:47:04.704Z', gear: 4},
    {v: 114, time: '2021-06-11T06:47:07.704Z', gear: 4},
    {v: 86, time: '2021-06-11T06:47:13.704Z', gear: 3},
    {v: 47, time: '2021-06-11T06:47:18.704Z', gear: 2},
    {v: 35, time: '2021-06-11T06:47:03.704Z', gear: 2},
    {v: 84, time: '2021-06-11T06:47:49.704Z', gear: 3},
    {v: 94, time: '2021-06-11T06:47:37.704Z', gear: 4},
    {v: 173, time: '2021-06-11T06:47:59.704Z', gear: 6}, // end
    {v: 67, time: '2021-06-11T06:45:56.704Z', gear: 3}
]

const crashStats = data.reduce((acc, obj) => {
    const currTime = Date.parse(obj.time)
    if (Date.parse(acc.driveEndedAt) < currTime) {
        acc.driveEndedAt = obj.time
    }
    if (Date.parse(acc.driveStartedAt) === 0 || Date.parse(acc.driveStartedAt) > currTime) {
        acc.driveStartedAt = obj.time
    }
    if (acc.maxGear < obj.gear) {
        acc.maxGear = obj.gear
    }
    if (acc.minGear === 0 || acc.minGear > obj.gear) {
        acc.minGear = obj.gear
    }
    if (acc.maxV < obj.v) {
        acc.maxV = obj.v
    }
    if (acc.minV === 0 || acc.minV > obj.v) {
        acc.minV = obj.v
    }
    acc.avgV += obj.v / data.length
    acc.driveDuration += currTime / 1000
    return acc
}, {
    driveStartedAt: Date(),
    driveEndedAt: '1970-01-01T00:00:00.704Z',
    avgV: 0,
    maxGear: 0,
    minGear: 0,
    maxV: 0,
    minV: 0,
    driveDuration: 0
})
console.log(crashStats)