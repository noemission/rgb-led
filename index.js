const Led = require('./LED')

const timeout = ms => new Promise(res => setTimeout(res, ms))
const red = new Led(13)
const green = new Led(12)
const blue = new Led(18)


async function test() {
    console.log('test started')
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


    console.log('test finished')
}

async function main() {
    await test();

    red.rgb(52);
    green.rgb(179);
    blue.rgb(135);

    await timeout(50000)
}

main()

process.on('SIGINT', () => {
    red.off()
    green.off()
    blue.off()
});