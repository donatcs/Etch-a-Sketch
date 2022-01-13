
 /// CREATE THE GRID

 let container = document.getElementById('container');





 let ROWS = 16 
 let COLS = 16
 let PIXEL = 40
 
 
 
 function containerAdd () {
 
         for (let i = 0; i < ROWS; i++) {
             for (let j = 0; j < COLS; j++) {
                         let pixel = document.createElement('div');
                         pixel.classList.add("weird");
                         pixel.style.position = 'absolute';
                         pixel.style.border = '1px solid black'
                         pixel.style.left = j * PIXEL + 'px';
                         pixel.style.top = i * PIXEL + 'px';
                         pixel.style.width = PIXEL  + 'px';
                         pixel.style.height = PIXEL + 'px';

                         pixel.style.margin = "auto"
                         container.appendChild(pixel)
                 
                         
 
             }
         }
 }
 
 
 containerAdd ();
 
 
 
         /// RANDOM COLOR
 
 
 const weird = document.querySelectorAll(".weird");
 
 let changeColorRandom = weird.forEach(weird => {  
 
 
     document.getElementById("rbg").addEventListener("click", () =>
 
     weird.onmouseover = function rbg() {
         
     const Color1 = Math.floor(Math.random() * 256);
     const Color2 = Math.floor(Math.random() * 256);
     const Color3 = Math.floor(Math.random() * 256);
          weird.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
 
 
     })
 });
 
 
         /// BLACK COLOR 
         
        
         let changeColorRandomz = weird.forEach(weird => {  
         document.getElementById("black").addEventListener("click", () =>
         weird.onmouseover = function black() {
                             
                             const Color1 = Math.floor(Math.random() * 1);
                             const Color2 = Math.floor(Math.random() * 1);
                             const Color3 = Math.floor(Math.random() * 1);
                             weird.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
 
 
                           })
                    
                         })
 
         /// RESET EVERYTHING ///
         
 const resetButton = document.querySelector("#resetButton")
         function myFunction() {
 
             for (i = 0; i < weird.length; i++) {
                 weird[i].style.background = 'white';
             };
         };
                    
 
         resetButton.addEventListener('click', function() {
 
             myFunction();
             container.style.display ="block";
         });
 
 
 
 
         /// white
 
         let changeColorRandomWhite = weird.forEach(weird => {  
             document.getElementById("white").addEventListener("click", () =>
             weird.onmouseover = function white() {
                                 
                                 const Color1 = Math.floor(Math.random() * 90000000);
                                 const Color2 = Math.floor(Math.random() * 90000000);
                                 const Color3 = Math.floor(Math.random() * 90000000);
                                 weird.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
     
     
                               })
                        
                             })