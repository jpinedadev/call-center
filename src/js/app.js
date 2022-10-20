console.log('hello world');

//boton para llamar o colgar
const buttonLlamar = document.querySelector(".llamar");
const toggleLlamar = (e)=>{
    if (e.target.textContent == 'Llamar') {
        e.target.textContent = 'Colgar'
    }else{
        e.target.textContent = 'Llamar'
    }
    contadorLLamar(e)
}

//texto que muestra si esta llamando o no
const contadorLLamar =(e)=>{
    console.log('El contenido es: '+e.target.textContent)
    const estado = e.target.textContent;
    const labelLlamada = document.querySelector('.estado-llamada')
    const labelTimer = document.querySelector('.contador-llamada')
    if(estado == 'Colgar'){
        labelLlamada.textContent = 'Llamando';
        labelTimer.setAttribute("id", "timer");
        contador();
    }else{
        labelLlamada.textContent = 'No hay llamada activa';
        labelTimer.id = 'stop-timer';
        contador()
    }
}

//crea un cronometro progresivo para la llamada
//var timerVar = setInterval(contador.countTimer, 1000); 
function contador(){
    var timerVar = setInterval(countTimer, 1000); 
    var totalSeconds = 0;
    const labelTimer2 = document.querySelector('.contador-llamada')

    function countTimer() {
        ++totalSeconds; 
        var hour = Math.floor(totalSeconds /3600); 
        var minute = Math.floor((totalSeconds - hour*3600)/60); 
        var seconds = totalSeconds - (hour*3600 + minute*60);
        if(hour < 10) {
            hour = "0"+hour; 
        }
        if(minute < 10) {
            minute = "0"+minute; 
        }
        if(seconds < 10) {
            seconds = "0"+seconds; 
        }
        if(labelTimer2.getAttribute("id")=='timer'){
            document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }
        if(labelTimer2.getAttribute("id")=='stop-timer'){
            clearInterval(timerVar)
            return  console.log('timer stop')
        }
    }
}


//escucha si el evento del clic se dispara
buttonLlamar.addEventListener("click", toggleLlamar); 






