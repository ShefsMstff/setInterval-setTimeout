
function Timer() {
    let count = 10; 
    const interval = setInterval(() => {
        console.log(count); 
        if (count === 0) {
            console.log("Blast off!");
            clearInterval(interval); 
        }
        count--; 
    }, 1000); 
}
Timer();
