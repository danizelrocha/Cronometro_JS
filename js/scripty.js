var sec=0
var min=0
var interval


function start(){
  interval=setInterval(watch,10)
    /* console.log('iniciou') */
}

function pause(){
    clearInterval(interval)
    /* console.log('Pausou') */
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('couter').innerText='00:00'

    /* console.log('Parou') */
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('couter').innerText=min+':'+sec
    /* console.log('já') */
}