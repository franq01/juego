const lienzo =document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const snake =[];




const head ={
    x:  2,
    y:  1,
    pinta: function(){
        ctx.fon = "25px Serif";
        ctx.fillText("🦫" , this.x * 20, this.y *20);
    }
}
snake.push(head);
snake.push(
    {
        x:  1,
        y:  1,
        xNext:2,
        yNext:1,
        pinta: function(){
            ctx.fon = "25px Serif";
            ctx.fillText("🦫" , this.x * 20, this.y *20);
        }
    }
)
snake.push(
    {
        x:  0,
        y:  1,
        xNext:1,
        yNext:1,
        pinta: function(){
            ctx.fon = "25px Serif";
            ctx.fillText("🦫" , this.x * 20, this.y *20);
        }
    }
)
 function nextMove(){
    snake.forEach((item, index)=> {
        if(index ===0){
            item.x = posX;
            item.y = posY;
        }else {
            item.x = item.xNext;
            item.y = item.yNext;
            xNext = snake[index -1].x;
            yNext = snake[index - 1].y;
        }
    })
 }
setInterval(() => {
    ctx.fillRect(0, 0, 600, 400);
   snake.forEach(item=>item.pinta())

    if(direction ===1 ) posX++;
    else if(direction === 2) posY++;
    else if(direction === 3) posX--;
    else posY--;

    if(posX >29) posX =0;
    else if(posX <= 0) posX =30;
    if(posY > 20 ) posY = 1;
    else if (posY <1 ) posY= 20; 
      
    nextMove();


    
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