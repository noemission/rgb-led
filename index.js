const Led = require('./LED')

const timeout = ms => new Promise(res => setTimeout(res, ms))
const red = new Led(13)
const green = new Led(12)
const blue = new Led(18)


async function main() {
    console.log('started')
    red.off()
    green.off()
    blue.off()
    
    await timeout(500)
    
    red.on()
    await timeout(500)
    red.off()
    
    blue.on()
    await timeout(500)
    blue.off()
    
    green.on()
    await timeout(500)
    green.off()
    
    
    console.log('finished')
}

delay()