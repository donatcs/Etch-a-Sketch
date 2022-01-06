
let container = document.getElementById('container');

let ROWS = 16
let COLS = 16
let PIXEL = 30



function containerAdd () {

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                        let pixel = document.createElement('div');
                        pixel.classList.add("weird");
                        pixel.style.position = 'absolute';
                        pixel.style.border = '1px solid green'
                        pixel.style.left = j * PIXEL + 'px';
                        pixel.style.top = i * PIXEL + 'px';
                        pixel.style.width = PIXEL  + 'px';
                        pixel.style.height = PIXEL + 'px';
                        
                        container.appendChild(pixel)
                
                        

            }
        }
}

containerAdd ();

const weird = document.querySelectorAll(".weird");

let changeColor = weird.forEach(weird => {  
    weird.addEventListener("mouseover", () => {
        const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
         weird.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
    })
})