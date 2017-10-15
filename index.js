const Led = require('./LED')
const readline = require('readline');
const Color = require('color');


//initialization
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const red = new Led(13)
const green = new Led(12)
const blue = new Led(18)

//utilities
const timeout = ms => new Promise(res => setTimeout(res, ms))
const flush = () => {
    red.off();
    green.off();
    blue.off();
}


//cmd questions
function cmd() {
    rl.question('Give me a color: ', (answer) => {

        try {
            var color = new Color(answer)
        } catch (err) {
            console.log(`Sorry ${answer} is not a valid color!`);
            return cmd();
        }

        red.rgb(color.red())
        green.rgb(color.green())
        blue.rgb(color.blue())
        //console.log(`Thank you for your valuable feedback: ${answer}`);

        cmd()
    });
}


async function test() {
    console.log('test started')
    flush();

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

    flush();
    console.log('test finished')
}




async function main() {
    await test();
    cmd()
}

main();



rl.on('SIGINT', () =>{
    flush()
    rl.close()
})
process.on('SIGINT', () =>{
    flush()
    process.exit()
});