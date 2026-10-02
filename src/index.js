const display = document.getElementById("display");
let timer = null;
let elapsedTime = 0;
let startTime = 0;
const isRunning = false;

export function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    
}

function reset(){
    
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/ (1000 * 60) % 60);
    let secondes = Math.floor(elapsedTime/ (1000) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}