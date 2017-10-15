const Gpio = require('pigpio').Gpio;


/**
 * 
 * 
 * @class Led
 */
class Led{
    /**
     * Creates an instance of Led.
     * @param {number} pin 
     * @memberof Led
     */
    constructor(pin){
        this.led = new Gpio(pin, {mode: Gpio.OUTPUT});
    }
    on(){
        this.led.digitalWrite(0);
    }
    off(){
        this.led.digitalWrite(1);
    }
    /**
     * 
     * 
     * @param {number} value 
     * @memberof Led
     */
    rgb(value){
        value = parseInt(255-value);
        if(value>255) value = 255;
        else if(value<0) value = 0;
        this.led.pwmWrite(value)
    }
}

module.exports = Led;