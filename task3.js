function fetchData(){
    const interval=setInterval(()=>{
console.log('Fetching new data...');

    },3000)

    // eger dayandirmaq istesek 
   setTimeout(()=>{
    clearInterval(interval);
    console.log('stop');
   },10000)
}
fetchData()





