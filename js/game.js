const juego=document.getElementById('containerMayorPlayer')
const combinacion = []
let posicionColor=0
let posicionIntento=0

const combinacionAleatoria = ((colores) => {
    for (i = 0; i <= 3; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 6)
        console.log(numeroAleatorio)
        const colorSeleccionado = colores[[numeroAleatorio]]
        combinacion.push(colorSeleccionado)
    }
    return combinacion
})

window.addEventListener('load',(f)=>{
    const colors=JSON.parse(localStorage.getItem('colores'))
    combinacionAleatoria(colors)
})

const pistas=(()=>{
    for(posicionColor=0;posicionColor<=3;posicionColor++){
        if(combinacion[posicionColor]===intentos[posicionIntento][posicionColor]){
            pistasTodas[posicionIntento][posicionColor].style.background='black'
        } else if(combinacion[posicionColor]!=intentos[posicionIntento][posicionColor] && combinacion.includes(intentos[posicionIntento][posicionColor])){
            pistasTodas[posicionIntento][posicionColor].style.background='white'
        }
    } posicionIntento++
})

const verificar = (() => {
    combinacionString = combinacion.toString()
    intentoString = intentos[numeroIntento].toString()
    if (combinacionString === intentoString){
        juego.style.display='none'
        const felicidades= document.createElement('div')
        const bailarina=document.createElement('img')
        felicidades.innerText='Felicidades '
        bailarina.src='../img/candy-girl2.gif'
        document.body.appendChild(felicidades)
        felicidades.appendChild(bailarina)
        felicidades.classList.add('felicidades-primero')
        console.log('ganaste')
    } else if (combinacionString != intentoString && intentosHechos.length==8){
        juego.style.display='none'
        const perdiste= document.createElement('div')
        const bailariaSad=document.createElement('img')
        bailarinaSad.src='../img/tiffi-sad.png'
        perdiste.appendChild(bailariaSad)
        perdiste.innerText='Lo siento, perdiste'
        document.body.appendChild(perdiste)
        perdiste.classList.add('perdiste-primero')
    }else{
        numeroIntento++
    }
    console.log(numeroIntento)
})

const cambioColores =(()=>{
    let colorElegido= colores[posicionColor]
    posicionColor=(posicionColor+1)%colores.length
    return colorElegido
})
