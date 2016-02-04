// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var x, y, speed;
    var nextMove;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 500){
        this.x = -161;
        this.speed = 120;
    }else{
        this.x = this.x + (this.speed * dt);
        // console.log("x",this.x);
        //y = 1 * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    var x = 202;
    var y = 405;
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(){
    if(this.nextMove === 'up'){
        this.y = this.y - 20;
        this.nextMove = undefined;
    }else if(this.nextMove === 'down'){
        this.y = this.y + 20;
        this.nextMove = undefined;
    }else if(this.nextMove === 'left'){
        this.x = this.x - 20;
        this.nextMove = undefined;
    }else if(this.nextMove === 'right'){
        this.x = this.x + 20;
        this.nextMove = undefined;
    }else{
      console.log("Player position: " + this.x + "," + this.y);
    }
};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keycode){
    console.log(keycode);
    this.nextMove = keycode;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
enemy1.x = -161;
enemy1.y = 60;
enemy1.speed = 100;
var enemy2 = new Enemy();
enemy2.x = -161;
enemy2.y = 140;
enemy2.speed = 75;
var enemy3 = new Enemy();
enemy3.x = -161;
enemy3.y = 220;
enemy3.speed = 85;
var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player();
player.x = 202;
player.y = 405;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


