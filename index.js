const path = require('path')
const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const School = require('./school')
const { test } = require('./client/script1')
const myPath = "/home/shihab/Projects/node_js/index.js"


console.log(path.basename(myPath))
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.parse(myPath))

console.log(os.platform());

fs.writeFileSync('test.txt', 'Hello new file\n')
fs.appendFileSync('test.txt', "how are you?")

const file = fs.readFileSync('test.txt')
console.log(file.toString());

const emitter = new EventEmitter()

emitter.on('bellRing', (period) => {
    console.log('We should start working time= '+period);
})

//firing an event
setTimeout(() => {
    emitter.emit('bellRing', '2 second passed')
}, 2000);


// importing an event from other separate file
const school = new School()

school.on('demoEmit', ({period, text}) => {
    console.log(`we need to run because ${period} ${text}`)
})

school.startPeriod()