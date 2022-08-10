import {c} from './main.js'

class Coin {
    constructor(x, y){
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.currentFrame = 0,
        this.lastFrame = 7,
        this.height = 30,
        this.width = 32
    }

    draw(){
        c.drawImage(coinAnim,
            16 * this.currentFrame,0,
            16, 15,
            this.position.x,
            this.position.y,
            this.width,
            this.height);
    }

}

const coinAnim = new Image();
coinAnim.src = './img/coin/coinAnim.svg'


setInterval(()=>{
    coin.currentFrame++
    if(coin.currentFrame > coin.lastFrame) coin.currentFrame = 0;

}, 200)


export let coin = new Coin(200, 200)
export const coinInit = () => coin = new Coin(200, 200)