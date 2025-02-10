var config ={
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); //Creates the object "game" that contains our game made with Phaser

var red; //Defines "red", the variable that will have our bird
var degree = 0; //Defines "degree", a variable that represents an angle which will be used in the "Option 2" for movement in the y axis in a sine function.
var begin; //Defines "begin" for "Option 3," which means the position of the bird in a given moment when the bird changes from "hitting the walls and ceiling" to moving in a sine function

function preload(){ //Loads our assets before the screen is shown
    this.load.image ('back', 'assets/sine2.jpg');
    this.load.spritesheet('lil red', 'assets/bird-red.png', {frameWidth: 75, frameHeight: 75});
};

function create(){ //Defines our initial screen and the animations,
    this.add.image(400, 300, 'back').setScale(1.2);
    red = this.add.sprite(100,300, 'lil red').setScale(2);
    this.anims.create({
        key:'move, lil red',
        frames: this.anims.generateFrameNumbers('lil red', {start:0, end:7}),
        frameRate: 17,
        repeat: -1
    });
    
    red.anims.play('move, lil red', true)
}

function update(){ //Updates the screen over time.

    // Movement through the x axis
    if(red.x === 100){
        red.setFlip(false, false);
        red.gox = true;
    }
    if(red.x < 700 && red.gox === true){
        red.x += 5;
    }
    if (red.x === 700){
        red.gox = false;
        red.setFlip(true, false);
    }

    if(red.x > 100 && red.gox === false){
        red.x -= 5;
    }

    //Option 1: "Complete" movement through the y axis (I will maintain this option as a comment)
    /*if(red.y == 300 && red.goy == undefined){ //Begins the movement upwards
        red.goy = true;
    }
        
    if (red.y > 50 && red.goy == true){ //Updates the upward movement
        red.y -= 5;
    }
    
    if (red.y == 50 && red.goy == true){ //Changes movement from upwards to downwards
        red.goy = false;
        console.log ('false');
        red.y += 5;
    }

    if (red.y >= 50 && red.goy == false){ //Updates the downward movement
        red.y += 5;
    }

    if (red.y == 550 && red.goy == false){ //Changes movement from downwards to upwards
        red.goy = true; 
    }
    
    if (red.y <= 550 && red.goy == true){ //Updates the upward movement
        red.y -= 5;
    } */

    //Option 2: Sine Movement

    /*
        degree += 1; \\Increases the angle used in the sine function.
        let radian = degree*(Math.PI/180)
        red.y = 300 + 50*Math.sin(5*radian);
        console.log(Math.sin(50*radian));
    */

    //Option 3: Combine Option 2 and 1 (The Ultimate Movement)
    if(red.gox == true){    
        begin = red.y;
        console.log(begin);
    }
    if (red.gox == true){
        if(red.goy == undefined){ //Begins the movement upwards
            red.goy = true;
            console.log(red.goy);
        }
            
        if (red.y > 50 && red.goy == true){ //Updates the upward movement
            red.y -= 5;
            console.log('2nd');
        }
        
        if (red.y <= 50 && red.goy == true){ //Changes movement from upwards to downwards
            red.goy = false;
            red.y += 5;
            console.log ('3rd');
        }
    
        if (red.y >= 50 && red.goy == false){ //Updates the downward movement
            red.y += 5;
            console.log ('4rd');
        }
    
        if (red.y == 550 && red.goy == false){ //Changes movement from downwards to upwards
            red.goy = true; 
        }
        
        if (red.y <= 550 && red.goy == true){ //Updates the upward movement
            red.y -= 5;
        } 
        
    } else {
        degree += 1;
        let radian = degree*(Math.PI/180);
        red.y = begin + 40*Math.sin(8*radian);
        console.log(begin);
        delete red.goy;
    }


}


