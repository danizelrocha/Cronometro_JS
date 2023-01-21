var sec=0
var min=0
var hou=0

var interval



function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()  // QUEBRA O DELAY DE 1 SEGUNDO NO INICIO DO CRONÔMETRO
    interval=setInterval(watch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    hou=0
    document.getElementById('couter').innerText='00:00:00'
}

function watch(){                                                                                                 
    sec++ // ACRESENTOU MAIS UM SEGUNDO NO INICIO DA (FUNCTION STAR) QUEBRANDO O DELAY DE UM SEGUNDO PARA O START.VIDE PRIMEIRO COMENTARIO
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hou++
        }
    }
    document.getElementById('couter').innerText=twoDigits(hou)+':'+twoDigits(min)+':'+twoDigits(sec);
}