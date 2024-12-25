const input = document.querySelector('#val');
const press = document.querySelector('#play');
const arret = document.querySelector('#pause');
const cadre = document.querySelector('#input');
const mySound = new Audio("sound.mpeg");
let countdown

press.addEventListener('click', function(){
    let val = parseFloat(input.value);
    clearInterval(countdown);
    countdown = setInterval(() => {
        if( val > 0){
            val -= 1;
            cadre.classList.add('cadre');
            input.value = val;
            mySound.loop = true;
            mySound.play();
        }
        else{
            clearInterval(countdown)
            cadre.classList.remove('cadre')
            mySound.pause();
        }
    }, 1000);
});
arret.addEventListener('click', function(){
    clearInterval(countdown)
    cadre.classList.remove('cadre')
    mySound.pause();
});
