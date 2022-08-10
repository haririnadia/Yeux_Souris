const container = document.querySelector('.container');
const ball = document.querySelectorAll('.ball')
container.addEventListener('mousemove',(e)=>{
    const x = `${e.clientX * 100 / window.innerWidth}%`;
    const y = `${e.clientY * 100 / window.innerHeight}%`;
    for(let i=0;i<ball.length;i++){
        ball[i].style.left = x;
        ball[i].style.top = y;
        ball[i].style.transform = `translate(-${x},-${y})`;

    }
})

