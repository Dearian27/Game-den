import {player, keys, characteristics, soundDeathSound, init} from './main.js'





addEventListener('keydown', ({ keyCode }) => {
     
    switch (keyCode) {
        case 65: //LEFT
            keys.left.pressed = true
            player.watchRight = false;
            break
        case 83:  //DOWN
          if (player.isGround) {
            player.velocity.y = 1
            player.isGround = false
        }
        if(player.position.y > 400){
           player.velocity.y = 0
        }
            break
        case 68: //RIGHT

            keys.right.pressed = true
            player.watchRight = true;
            break
        case 87: //UP

            if (player.isGround) {
                characteristics.jumps.j1 = setTimeout(()=>{player.velocity.y -= 3;},115)
                characteristics.jumps.j2 = setTimeout(()=>{player.velocity.y -= 3;},120)
                characteristics.jumps.j3 = setTimeout(()=>{player.velocity.y -= 3;},110)

                player.velocity.y -= 12
                player.isGround = false
            }
            break
        case 32:  //SPACE
            if (player.isGround) {
                player.velocity.y -= 20
                player.isGround = false
            }
            break
        case 82:  //R
            if(player.character == 'ktman')
            {
                
                soundDeathSound()
                characteristics.bullets = []
                init()
                player.character = 'blender'
                
            }
            else{
                
                soundDeathSound()
                characteristics.bullets = []
                init()
                player.character = 'ktman'
            }
        break
    }
})



addEventListener('keyup', ({ keyCode }) => {


    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break
        case 83: //DOWN

            // console.log('up now')
            keys.down.pressed = false
            keys.down.isDownAlready = false
            break
        case 68:
            keys.right.pressed = false
            break
        case 87: //UP
            clearTimeout(characteristics.jumps.j1)
            clearTimeout(characteristics.jumps.j2)
            clearTimeout(characteristics.jumps.j3)
            break
    }
})