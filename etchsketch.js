const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('.buttons')


window.onload = () => {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}
function createDivs(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
createDivs(16,16)

function grayColor() {
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            let Rnum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${Rnum},${Rnum},${Rnum})`
            box.style.background = GrayScale;   
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add(`btn`)
}
grayColor()



function blackColor() {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'Black'     
        }))
       
        
    })
    buttonsContainer.appendChild(btnBlack).classList.add(`btn`)
}
blackColor()

function RGBColor() {
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB';
    btnRGB.addEventListener('click' ,() =>{
        //RGB Select
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256); 
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;     
        }))
       
        
    })
    buttonsContainer.appendChild(btnRGB).classList.add(`btn`)
}
RGBColor()

function reset(){
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => {
        box.remove();
    })
}
function resize() {
   
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('What size do you want your grid to be?')
        if(user === null || user < 1){
            reset();
            createDivs(16,16)
            blackColor()
            grayColor()
            RGBColor();
        } else { 
            reset();
            createDivs(user,user)
            blackColor()
            grayColor()
            RGBColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
resize()

function backgrooundAnim() {

    colors = ['red','green','blue', 'yellow'];
    const section = document.querySelector('.section');
    const span = document.createElement('span');

    let size = Math.random() * 50;

    span.style.width = 10 + size + 'px';
    span.style.height = 10 + size + 'px';
    span.style.borderRadius = `${size}%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];
    span.style.background = bg;

    section.appendChild(span);

    setTimeout(() => {span.remove()},5000)
}

setInterval(backgrooundAnim, 150);

