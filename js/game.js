const juego=document.getElementById('containerMayorPlayer')
let posicionColor=0
let posicionIntento=0
const botonCheck=document.getElementById('botonCheck')
const circles=document.querySelectorAll('.colors-selected')

const coloresElegidosUsuario=[]
const colorOpcion1=document.getElementById('color1')
const colorOpcion2=document.getElementById('color2')
const colorOpcion3=document.getElementById('color3')
const colorOpcion4=document.getElementById('color4')
const colorOpcion5=document.getElementById('color5')
const colorOpcion6=document.getElementById('color6')
const colorOpcion7=document.getElementById('color7')
const colorOpcion8=document.getElementById('color8')
const colorOpcion9=document.getElementById('color9')
const colorOpcion10=document.getElementById('color10')
const circulo1=document.getElementById('circulo1')
const circulo2=document.getElementById('circulo2')
const circulo3=document.getElementById('circulo3')
const circulo4=document.getElementById('circulo4')
const circulo5=document.getElementById('circulo5')
const circulo6=document.getElementById('circulo6')
const circulo7=document.getElementById('circulo7')
const circulo8=document.getElementById('circulo8')
const circulo9=document.getElementById('circulo9')
const circulo10=document.getElementById('circulo10')
const circulo11=document.getElementById('circulo11')
const circulo12=document.getElementById('circulo12')
const circulo13=document.getElementById('circulo13')
const circulo14=document.getElementById('circulo14')
const circulo15=document.getElementById('circulo15')
const circulo16=document.getElementById('circulo16')
const circulo17=document.getElementById('circulo17')
const circulo18=document.getElementById('circulo18')
const circulo19=document.getElementById('circulo19')
const circulo20=document.getElementById('circulo20')
const circulo21=document.getElementById('circulo21')
const circulo22=document.getElementById('circulo22')
const circulo23=document.getElementById('circulo23')
const circulo24=document.getElementById('circulo24')
const circulo25=document.getElementById('circulo25')
const circulo26=document.getElementById('circulo26')
const circulo27=document.getElementById('circulo27')
const circulo28=document.getElementById('circulo28')
const circulo29=document.getElementById('circulo29')
const circulo30=document.getElementById('circulo30')
const circulo31=document.getElementById('circulo31')
const circulo32=document.getElementById('circulo32')
const pista1=document.getElementById('pista1')
const pista2=document.getElementById('pista2')
const pista3=document.getElementById('pista3')
const pista4=document.getElementById('pista4')
const pista5=document.getElementById('pista5')
const pista6=document.getElementById('pista6')
const pista7=document.getElementById('pista7')
const pista8=document.getElementById('pista8')
const pista9=document.getElementById('pista9')
const pista10=document.getElementById('pista10')
const pista11=document.getElementById('pista11')
const pista12=document.getElementById('pista12')
const pista13=document.getElementById('pista13')
const pista14=document.getElementById('pista14')
const pista15=document.getElementById('pista15')
const pista16=document.getElementById('pista16')
const pista17=document.getElementById('pista17')
const pista18=document.getElementById('pista18')
const pista19=document.getElementById('pista19')
const pista20=document.getElementById('pista20')
const pista21=document.getElementById('pista21')
const pista22=document.getElementById('pista22')
const pista23=document.getElementById('pista23')
const pista24=document.getElementById('pista24')
const pista25=document.getElementById('pista25')
const pista26=document.getElementById('pista26')
const pista27=document.getElementById('pista27')
const pista28=document.getElementById('pista28')
const pista29=document.getElementById('pista29')
const pista30=document.getElementById('pista30')
const pista31=document.getElementById('pista31')
const pista32=document.getElementById('pista32')
let numeroIntento=0
let numero=0

const intento1=[]
const intento2=[]
const intento3=[]
const intento4=[]
const intento5=[]
const intento6=[]
const intento7=[]
const intento8=[]
const intentos=[intento1,intento2,intento3,intento4,intento5,intento6,intento7,intento8]
const intentosHechos=[]
const pistas1=[pista1,pista2,pista3,pista4]
const pistas2=[pista5,pista6,pista7,pista8]
const pistas3=[pista9,pista10,pista11,pista12]
const pistas4=[pista13,pista14,pista15,pista16]
const pistas5=[pista17,pista18,pista19,pista20]
const pistas6=[pista21,pista22,pista23,pista24]
const pistas7=[pista25,pista26,pista27,pista28]
const pistas8=[pista29,pista30,pista31,pista32]
const pistasTodas=[pistas1,pistas2,pistas3,pistas4,pistas5,pistas6,pistas7,pistas8]
let colors=[]
const combinacion = []
let playerN=localStorage.getItem('player')

const combinacionAleatoria = ((colors) => {
    for (i = 0; i <= 3; i++) {
        const numeroAleatorio = Math.floor(Math.random() * colors.length)
        console.log(numeroAleatorio)
        const colorSeleccionado = colors[numeroAleatorio]
        combinacion.push(colorSeleccionado)
    }
    return combinacion
})

colors=JSON.parse(localStorage.getItem('colores'))
combinacionAleatoria(colors)

for(i=0;i<colors.length;i++){
    circles[i].style.backgroundColor=colors[i]
}

document.addEventListener('click',(evento)=>{
    if (evento.target.id==='circulo1' && intento1<=0){
        colorElegido1=cambioColores()
        circulo1.style.background=colorElegido1
    } if (evento.target.id==='circulo2' && intento1<=0){
        colorElegido2=cambioColores()
        circulo2.style.background=colorElegido2
    } if(evento.target.id==='circulo3' && intento1<=0){
        colorElegido3=cambioColores()
        circulo3.style.background=colorElegido3
    } if(evento.target.id==='circulo4' && intento1<=0){
        colorElegido4=cambioColores()
        circulo4.style.background=colorElegido4
    } if (evento.target.id==='circulo5' && intento2<=0 && intentosHechos.length>0){
        colorElegido1=cambioColores()
        circulo5.style.background=colorElegido1
    } if (evento.target.id==='circulo6' && intento2<=0 && intentosHechos.length>0){
        colorElegido2=cambioColores()
        circulo6.style.background=colorElegido2
    } if (evento.target.id==='circulo7' && intento2<=0 && intentosHechos.length>0){
        colorElegido3=cambioColores()
        circulo7.style.background=colorElegido3
    } if (evento.target.id==='circulo8' && intento2<=0 && intentosHechos.length>0){
        colorElegido4=cambioColores()
        circulo8.style.background=colorElegido4
    } if (evento.target.id==='circulo9' && intento3<=0 && intentosHechos.length>1){
        colorElegido1=cambioColores()
        circulo9.style.background=colorElegido1
    } if (evento.target.id==='circulo10' && intento3<=0 && intentosHechos.length>1){
        colorElegido2=cambioColores()
        circulo10.style.background=colorElegido2
    } if (evento.target.id==='circulo11' && intento3<=0 && intentosHechos.length>1){
        colorElegido3=cambioColores()
        circulo11.style.background=colorElegido3
    } if (evento.target.id==='circulo12' && intento3<=0 && intentosHechos.length>1){
        colorElegido4=cambioColores()
        circulo12.style.background=colorElegido4
    } if (evento.target.id==='circulo13' && intento4<=0 && intentosHechos.length>2){
        colorElegido1=cambioColores()
        circulo13.style.background=colorElegido1
    } if (evento.target.id==='circulo14' && intento4<=0 && intentosHechos.length>2){
        colorElegido2=cambioColores()
        circulo14.style.background=colorElegido2
    } if (evento.target.id==='circulo15' && intento4<=0 && intentosHechos.length>2){
        colorElegido3=cambioColores()
        circulo15.style.background=colorElegido3
    } if (evento.target.id==='circulo16' && intento4<=0 && intentosHechos.length>2){
        colorElegido4=cambioColores()
        circulo16.style.background=colorElegido4
    } if (evento.target.id==='circulo17' && intento5<=0 && intentosHechos.length>3){
        colorElegido1=cambioColores()
        circulo17.style.background=colorElegido1
    } if (evento.target.id==='circulo18' && intento5<=0 && intentosHechos.length>3){
        colorElegido2=cambioColores()
        circulo18.style.background=colorElegido2
    } if (evento.target.id==='circulo19' && intento5<=0 && intentosHechos.length>3){
        colorElegido3=cambioColores()
        circulo19.style.background=colorElegido3
    } if (evento.target.id==='circulo20' && intento5<=0 && intentosHechos.length>3){
        colorElegido4=cambioColores()
        circulo20.style.background=colorElegido4
    } if (evento.target.id==='circulo21' && intento6<=0 && intentosHechos.length>4){
        colorElegido1=cambioColores()
        circulo21.style.background=colorElegido1
    } if (evento.target.id==='circulo22' && intento6<=0 && intentosHechos.length>4){
        colorElegido2=cambioColores()
        circulo22.style.background=colorElegido2
    } if (evento.target.id==='circulo23' && intento6<=0 && intentosHechos.length>4){
        colorElegido3=cambioColores()
        circulo23.style.background=colorElegido3
    } if (evento.target.id==='circulo24' && intento6<=0 && intentosHechos.length>4){
        colorElegido4=cambioColores()
        circulo24.style.background=colorElegido4
    } if (evento.target.id==='circulo25' && intento7<=0 && intentosHechos.length>5){
        colorElegido1=cambioColores()
        circulo25.style.background=colorElegido1
    } if (evento.target.id==='circulo26' && intento7<=0 && intentosHechos.length>5){
        colorElegido2=cambioColores()
        circulo26.style.background=colorElegido2
    } if (evento.target.id==='circulo27' && intento7<=0 && intentosHechos.length>5){
        colorElegido3=cambioColores()
        circulo27.style.background=colorElegido3
    } if (evento.target.id==='circulo28' && intento7<=0 && intentosHechos.length>5){
        colorElegido4=cambioColores()
        circulo28.style.background=colorElegido4
    } if (evento.target.id==='circulo29' && intento8<=0 && intentosHechos.length>6){
        colorElegido1=cambioColores()
        circulo29.style.background=colorElegido1
    } if (evento.target.id==='circulo30' && intento8<=0 && intentosHechos.length>6){
        colorElegido2=cambioColores()
        circulo30.style.background=colorElegido2
    } if (evento.target.id==='circulo31' && intento8<=0 && intentosHechos.length>6){
        colorElegido3=cambioColores()
        circulo31.style.background=colorElegido3
    } if (evento.target.id==='circulo32' && intento8<=0 && intentosHechos.length>6){
        colorElegido4=cambioColores()
        circulo32.style.background=colorElegido4
    } else if (evento.target.id==='botonCheck' && intentos[numero].length<=4){
        intentos[numero].push(colorElegido1,colorElegido2,colorElegido3,colorElegido4)
        intentosHechos.push(intentos[numero])
        pistas()
        verificar()
        numero++
        }
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
        const felicidadesTexto= document.createElement('div')
        const playerBox=document.createElement('div')
        const bailarina=document.createElement('img')
        const botonInicio=document.createElement('div')
        const botonInicioa=document.createElement('a')
        felicidadesTexto.innerText='Congratulations'
        playerBox.innerText=playerN
        botonInicio.innerText='HOME'
        botonInicioa.href='../index.html'
        bailarina.src='../img/candy-girl2.gif'
        localStorage.clear()
        document.body.appendChild(felicidades)
        felicidades.appendChild(felicidadesTexto)
        felicidades.appendChild(playerBox)
        felicidades.appendChild(bailarina)
        felicidades.appendChild(botonInicioa)
        botonInicioa.appendChild(botonInicio)
        felicidades.classList.add('felicidades-primero')
        felicidadesTexto.classList.add('felicidades-texto')
        playerBox.classList.add('felicidades-texto')
        botonInicio.classList.add('boton-inicio')
        botonInicioa.classList.add('botones-enlace')
    } else if (combinacionString != intentoString && intentosHechos.length==8){
        juego.style.display='none'
        const perdiste= document.createElement('div')
        const playerBox=document.createElement('div')
        playerBox.innerText=playerN
        const bailarinaSad=document.createElement('img')
        const botonInicio=document.createElement('div')
        const botonInicioa=document.createElement('a')
        botonInicioa.href='../index.html'
        bailarinaSad.src='../img/tiffi-crying.png'
        perdiste.innerText='You lose'
        botonInicio.innerText='HOME'
        document.body.appendChild(perdiste)
        perdiste.appendChild(playerBox)
        perdiste.appendChild(bailarinaSad)
        perdiste.appendChild(botonInicioa)
        botonInicioa.appendChild(botonInicio)
        perdiste.classList.add('perdiste-primero')
        playerBox.classList.add('felicidades-texto')
        botonInicio.classList.add('boton-inicio')
        botonInicioa.classList.add('botones-enlace')
        localStorage.clear()
    }else{
        numeroIntento++
    }
})

const cambioColores =(()=>{
    let colorElegido= colors[posicionColor]
    posicionColor=(posicionColor+1)%colors.length
    return colorElegido
})


