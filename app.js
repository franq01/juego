const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");

let posX = 0;
let posY = 1;

let direction = 1;
function init(){
     posX = 2;
     posY = 1;
     direction = 1;
     
     bgdSound.play();
    const snake = [];
    const head = {
        x: 2,
        y: 1,
        pinta: function(){
        ctx.font = "25px Serif";
        ctx.fillText  ("🐛", this.x * 20, this.y * 20);
        }
    }
    
    snake.push (head);
    snake.push ({
            x: 1,
            y: 1,
            xNext: 2,
            yNext: 1,
            pinta: function(){
            ctx.font = "25px Serif";
            ctx.fillText  ("🐛", this.x * 20, this.y * 20);
            }
        })
    
        snake.push ({
            x: 0,
            y: 1,
            xNext: 1,
            yNext: 1,
            pinta: function(){
            ctx.font = "25px Serif";
            ctx.fillText  ("🐛", this.x * 20, this.y * 20);
            }
        })
        return snake;
}
const bgdSound = new Audio('./fondo.mp3');
const eating = new Audio('./eating.mp3')
let snake = init();

    function nextMove (){
        snake.forEach((item, index) => {
            if(index === 0){
                item.x = posX;
                item.y = posY;
            }else{
                item.x = item.xNext;
                item.y = item.yNext;
                item.xNext = snake [index -1].x;
                item.yNext = snake [index -1].y;
            }
        })
        }
        const food ={
            x: 0,
            y: 0,
            pinta: function(){
                ctx.fillText('🦗', this.x * 20, this.y *20);
            },
            random: function(){
                this.x = Math.floor(Math.random()*25);
                this.y = Math.ceil(Math.random() *17);
            }
        }

        function checkEat(){
            if (snake[0].x === food.x && snake[0].y === food.y){
                eating.play();
                snake.push({ ...snake[1] });
                food.random();
            }
        }



function gameOver(){
    for(let i = 1; i<snake.length;i++){
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            return true;
        }
        return false;
    }
}

food.random();
setInterval(() => {
    ctx.fillRect(0, 0, 600, 400)

    food.pinta();
    
    snake.forEach(item => item.pinta());

    checkEat();
    if (gameOver()){
        alert('has perdido')
    }

    if(direction === 1)   posX++;
    else if (direction === 2)posY++;
    else if (direction === 3)posX--;
    else posY--;

    if(posX > 29) posX = 0;
    else if (posX < 0) posX = 30;
    if(posY > 20) posY = 1;
    else if (posY < 1) posY = 20;

   nextMove();
    
}, 200);

document.querySelector('body')
.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'ArrowRight':
            direction = 1;
            break;
            case 'ArrowLeft':
            direction = 3;
            break;
            case 'ArrowDown':
            direction = 2;
            break;
            case 'ArrowUp':
            direction = 4;
            break;
    }
});

document.querySelector('.container')
     .addEventListener('click', (e) => {
        if(e.target.classList.contains('btn')){
            const button = e.target.innerText;
            switch(button){
                case 'Rigth':
                    direction =1;
                    break;
                case 'Down':
                    direction = 2;
                    break;
                case 'Left':
                    direction = 3;
                    break;
                case 'Up':
                    direction = 4;
                    break;
            }
        }
     })