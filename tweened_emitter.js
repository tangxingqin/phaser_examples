var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var emitter;
var x;

function preload() {

    game.load.image('bubble', 'assets/sprites/bubble.png');
    game.load.image('star', 'assets/sprites/star.png');
    game.load.image('water', 'assets/sprites/flower-2.jpg');

}

function create() {

//    game.add.tileSprite(0, 344, 800, 256, 'water');

    emitter = game.add.emitter(100, 400, 48);

    emitter.makeParticles('star');

//    emitter.setXSpeed(0, 10);
//    emitter.setYSpeed(100, 100);
    emitter.minParticleSpeed.set(0, 0);
    emitter.maxParticleSpeed.set(0, 0);

//    emitter.bringToTop = true;
//    emitter.setRotation(100, 100);
//    emitter.setAlpha(0.1, 1, 10000, Phaser.Easing.Back.InOut, true);
//    emitter.setScale(0.1, 1, 0.1, 1, 10000, Phaser.Easing.Back.InOut, true);
    emitter.setAlpha(0.1, 1, 0);
    emitter.setScale(0.1, 1, 0.1, 1, 0);
    emitter.gravity = 0;

    emitter.start(false, 0, 100);

    var scaleAll = function(child) {
        child.scale.setTo(2);
    };

//    emitter.emitX = 100;

//    game.add.tween(emitter).to( { emitX: 700 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
//    game.add.tween(emitter).to( { emitX: 300 }, 2000, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);
    var a = game.add.tween(emitter).to({emitX: 300}, 1000);
    var b = game.add.tween(emitter).to({emitY: 100}, 1500);
    var c = game.add.tween(emitter).to({emitX: 100}, 1000);
    var d = game.add.tween(emitter).to({emitY: 400}, 1500);
    a.chain(b);
    b.chain(c);
    c.chain(d);
    d.onComplete.add(function() {
        console.log('complete', emitter.countLiving(), emitter.countDead());
//        emitter.callAll('scaleAll');
        setTimeout(function() {
        emitter.forEach(function(child) {
            child.scale.setTo(2);
            old_y = child.y;
            game.add.tween(child).to({y: old_y+100}, 1000, null, true);
        }, this);}, 1000);
    });
    a.start();

}

function update() {


}

