const lienzo =document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');


ctx.fon ="25px Serif";
ctx.fillText("🦫" , 100,  100);

const head ={
    x:  0,
    y:  1,
    pinta: function(){
        ctx.fon = "25px Serif";
        ctx.fillText("🦫" , this.x * 20, this.y *20);
    }
}
let posX =0;
let posY =1;

    let direction = 1;

setInterval(() => {
    ctx.fillRect(0, 0, 600, 400);
    head.pinta();
    head.x =posX;
    head.y =posY;


    if(direction ===1 ) posX++;
    else if(direction === 2) posY++;
    else if(direction === 3) posX--;
    else posY--;

    if(posX >29) posX =0;
    else if(posX <= 0) posX =30;
    if(posY > 20 ) posY = 1;
    else if (posY <1 ) posY= 20; 
      
} ,500);

document.querySelector('body')
.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'ArrowRight':
            direction =1;
            break;
        case 'ArrowLeft':
            direction =3;
            break;
        case 'ArrowDown':
            direction =2;
            break;
        case 'ArrowUp':
            direction =4;
            break;
    }
})