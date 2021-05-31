$('.dailogbox').hide();
$('#restartdialog').hide();
$('.start').click(function(){
score = 0;
bonus = new Audio('bonus.wav');
jumpaudio = new Audio('jump.wav');
var x = 10;
$('.dailogbox').show();
$('.start').hide();
var x = document.getElementById('bgaudio');

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}

function updatescore(score) {
    scoreCont.innerHTML = "Your Score:" + score;
}
console.log(score);

function audio() {
    bgaudio = new Audio('bgaudio.mp3');
    bgaudio.play();
}
audio();

RoadAni = document.querySelector('.road');
RoadAni.classList.add('roadAni');
$('#restartdialog').hide();
$('#obsticle').addClass('obsticleAni');

function jump() {
    character = document.getElementById("sprite-image");
    character.classList.add('animation');
    jumpaudio.play();
    setTimeout(() => {
        character.classList.remove('animation');
        jumpaudio.pause();
    }, 700);
}
jump();

document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        character = document.getElementById("sprite-image");
        character.classList.add('animation');
        jumpaudio.play();
        setTimeout(() => {
            character.classList.remove('animation')
            jumpaudio.pause();
        }, 700);
    }
}

var animationInterval;
var spriteSheet = document.getElementById("sprite-image");
var widthOfSpriteSheet = 214;
var widthOfEachSprite = 35;

function stopAnimation() {
    clearInterval(animationInterval);
}

function startAnimation() {
    var position = widthOfEachSprite; //start position for the image
    const speed = 60; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites

    animationInterval = setInterval(() => {
        spriteSheet.style.backgroundPosition = `-${position}px 0px`;

        if (position < widthOfSpriteSheet) {
            position = position + diff;
        } else {
            //increment the position by the width of each sprite each time
            position = widthOfEachSprite;
        }
        //reset the position to show first sprite after the last one
    }, speed);
}
startAnimation();

var animationInterval1;
var spriteSheetob2 = document.getElementById("obsticle");
var widthOfSpriteSheetob2 = 261;
var widthOfEachSpriteob2 = 65.25;

function stopAnimationob2() {
    clearInterval(animationInterval1);
}

function startAnimationob2() {
    var positionob2 = widthOfEachSpriteob2; //start position for the image
    const speedob2 = 100; //in millisecond(ms)
    const diffob2 = widthOfEachSpriteob2; //difference between two sprites

    animationInterval1 = setInterval(() => {
        spriteSheetob2.style.backgroundPosition = `-${positionob2}px 0px`;

        if (positionob2 < widthOfSpriteSheetob2) {
            positionob2 = positionob2 + diffob2;
        } else {
            //increment the position by the width of each sprite each time
            positionob2 = widthOfEachSpriteob2;
        }
        //reset the position to show first sprite after the last one
    }, speedob2);
}
startAnimationob2();

setInterval(() => {
    robo = document.querySelector('.character');
    obsticle = document.querySelector('#obsticle');
    dx = parseInt(window.getComputedStyle(robo, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(robo, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obsticle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 30 && offsetY < 32) {
        $('.stop').hide();
        $('#scoreCont').hide();
        $('#restartdialog').text('Reload To Restart'+' '+'Your Score is :'+ ' '+score);
        $('.gamecontainer').addClass('gamecontainerAni');
        $('body').remove('gamecontainerAni');
        RoadAni.classList.remove('roadAni');
        $('#restartdialog').show(500);
        bonus.play();
        jumpaudio.pause();
        pauseAudio();
        score = 0;
    }
    else {
        setTimeout(() => {
            score += 1;;
            updatescore(score);
        }, 2000);
        if (score == x) {
            $('body').addClass('gamecontainerAni');
        }
        playAudio();
    }

}, 100);
setInterval(() => {
    robo2 = document.querySelector('.character');
    obsticle2 = document.querySelector('#obsticle2');
    dx2 = parseInt(window.getComputedStyle(robo2, null).getPropertyValue('left'));
    dy2 = parseInt(window.getComputedStyle(robo2, null).getPropertyValue('top'));
    ox2 = parseInt(window.getComputedStyle(obsticle2, null).getPropertyValue('left'));
    oy2 = parseInt(window.getComputedStyle(obsticle2, null).getPropertyValue('top'));
    offsetX2 = Math.abs(dx2 - ox2);
    offsetY2 = Math.abs(dy2 - oy2);
    if (offsetX2 < 24 && offsetY2 < 32) {
        $('.stop').hide();
        $('#scoreCont').hide();
        $('#restartdialog').text('Reload To Restart'+' '+'Your Score is :'+ ' '+score);
        $('.gamecontainer').addClass('gamecontainerAni');
        $('body').remove('gamecontainerAni');
        RoadAni.classList.remove('roadAni');
        $('#restartdialog').show(500);
        bonus.play();
        jumpaudio.pause();
        pauseAudio();
        score = 0;
    }
}, 100);

setInterval(() => {
    robo3 = document.querySelector('.character');
    obsticle3 = document.querySelector('#obsticle3');
    dx3 = parseInt(window.getComputedStyle(robo3, null).getPropertyValue('left'));
    dy3 = parseInt(window.getComputedStyle(robo3, null).getPropertyValue('top'));
    ox3 = parseInt(window.getComputedStyle(obsticle3, null).getPropertyValue('left'));
    oy3 = parseInt(window.getComputedStyle(obsticle3, null).getPropertyValue('top'));
    offsetX3 = Math.abs(dx3 - ox3);
    offsetY3 = Math.abs(dy3 - oy3);
    if (offsetX3 < 24 && offsetY3 < 32) {
        $('.stop').hide();
        $('#scoreCont').hide();
        $('#restartdialog').text('Reload To Restart'+' '+'Your Score is :'+ ' '+score);
        $('.gamecontainer').addClass('gamecontainerAni');
        $('body').remove('gamecontainerAni');
        RoadAni.classList.remove('roadAni');
        $('#restartdialog').show(500);
        bonus.play();
        jumpaudio.pause();
        pauseAudio();
        score = 0;
    }
}, 100);

setInterval(() => {
    robo4 = document.querySelector('.character');
    obsticle4 = document.querySelector('#obsticle4');
    dx4 = parseInt(window.getComputedStyle(robo4, null).getPropertyValue('left'));
    dy4 = parseInt(window.getComputedStyle(robo4, null).getPropertyValue('top'));
    ox4 = parseInt(window.getComputedStyle(obsticle4, null).getPropertyValue('left'));
    oy4 = parseInt(window.getComputedStyle(obsticle4, null).getPropertyValue('top'));
    offsetX4 = Math.abs(dx4 - ox4);
    offsetY4 = Math.abs(dy4 - oy4);
    if (offsetX4 < 40 && offsetY4 < 40) {
        $('.stop').hide();
        $('#scoreCont').hide();
        $('#restartdialog').text('Reload To Restart'+' '+'Your Score is :'+ ' '+score);
        $('.gamecontainer').addClass('gamecontainerAni');
        $('body').remove('gamecontainerAni');
        RoadAni.classList.remove('roadAni');
        $('#restartdialog').show(500);
        bonus.play();
        jumpaudio.pause();
        pauseAudio();
        score = 0;
    }
}, 100);

var random = 2500;
var random1 = 9200;
var random2 = 14000;

var interval = 7500;
var intervel1 = 14500;
var intervel2 = 19000;

setInterval(() => {
    obsticle1 = document.querySelector('#obsticle2');
    obsticle1.classList.add('obsticle2Ani');
}, random);
function start1() {
    obsticle1.classList.remove('obsticle2Ani');
}
setInterval(() => {
    start1();
}, interval);

setInterval(() => {
    ob5 = document.querySelector('#obsticle3');
    ob5.classList.add('obsticle3Ani');
}, random1);
function start2() {
    ob5.classList.remove('obsticle3Ani');
}
setInterval(() => {
    start2();
}, intervel1);

setInterval(() => {
    obsticle4 = document.querySelector('#obsticle4');
    obsticle4.classList.add('obsticle4Ani');
}, random2);
function start3() {
    obsticle4.classList.remove('obsticle4Ani');
}
setInterval(() => {
    start3();
}, intervel2);

setTimeout(() => {
    $('.dailogbox').addClass('dailogbox1');
}, 1000);

setTimeout(() => {
    $(".name").animate({
        left: '500px',
        opacity: '1',
        top: '25%',
    });
}, 3000);
setTimeout(() => {
    $(".instruction").animate({
        left: '200px',
    });
}, 4000);
setTimeout(() => {
    $(".instruction").addClass('instruction1');
}, 10000);

setTimeout(() => {
    $('.name').animate({
        top: '10%',
    })
}, 4000);

setTimeout(() => {
    $('.dailogbox').remove();
}, 4000);
console.log(score);
});