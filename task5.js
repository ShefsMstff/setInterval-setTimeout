const progressbar = document.querySelector('#progressbar'); 
const startBtn = document.querySelector('#startBtn'); 
let width = 0; 
let interval; 

const startProgress = () => {
    width = 0; 
    progressbar.style.width = `${width}%`; 

    interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval); 
        } else {
            width += 2; 
            progressbar.style.width = `${width}%`; 
        }
    }, 100); 
};

startBtn.addEventListener('click', startProgress); 
