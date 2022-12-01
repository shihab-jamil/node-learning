const EventEmitter = require('events')

class School extends EventEmitter{
    startPeriod(){
        console.log('Class Started');
        setTimeout(() => {
            this.emit('demoEmit', {
                period : 'First',
                text : 'Period Ended'
            })
        }, 2000);
    }
}
module.exports = School