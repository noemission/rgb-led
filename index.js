const Led = require('./LED')



const timeout = ms => new Promise(res => setTimeout(res, ms))

async function delay () {
    console.log('started')
    await timeout(5000)
    console.log('finished')
  }
  
  delay()