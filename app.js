
let container = document.getElementById('container');

let ROWS = 16
let COLS = 16
let PIXEL = 30



function containerAdd () {

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                        let pixel = document.createElement('div');
                        pixel.style.position = 'absolute';
                        pixel.style.border = '1px solid green'
                        pixel.style.left = j * PIXEL + 'px';
                        pixel.style.top = i * PIXEL + 'px';
                        pixel.style.width = PIXEL  + 'px';
                        pixel.style.height = PIXEL + 'px';
                        
                        container.appendChild(pixel)
                
                        pixel.style.backgroundColor = 'black'

            }
        }
}



containerAdd ();


