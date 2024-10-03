let timer;
let time = 10; 

const countElement = document.getElementById('countElement');
const startBtn = document.getElementById('startBtn');
const cancelBtn = document.getElementById('cancelBtn');
function startTimer() {
    time = 10; 
    countElement.textContent = "00:10"; 
startBtn.disabled = true; 
    cancelBtn.disabled = false; 

    timer = setInterval(() => {
        if (time > 0) {
            time--;
            countElement.textContent = time < 10 ? `00:0${time}` : `00:${time}`;
        } else {
            clearInterval(timer); 
      
            startBtn.disabled = false;
            cancelBtn.disabled = true; 
        }
    }, 1000); 
}

function cancelTimer() {
    clearInterval(timer); 
  
    countElement.textContent = "00:10";
    time = 10; 
    startBtn.disabled = false; 
    cancelBtn.disabled = true; 
}
startBtn.addEventListener('click', startTimer);
cancelBtn.addEventListener('click', cancelTimer);
