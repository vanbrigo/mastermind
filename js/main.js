const colores=['#56ff50','#ff1493','#8a2be2','#ffd700','#ff0000','#00b7ff']
const circulo1=document.getElementById('circulo1')
const circulo2=document.getElementById('circulo2')
const circulo3=document.getElementById('circulo3')
const circulo4=document.getElementById('circulo4')
const botonCheck=document.getElementById('botonCheck')
let posicionColor=0
const intento=[]

const combinacionAleatoria = (() => {
    const combinacion = []
    for (i = 0; i <= 3; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 6)
        console.log(numeroAleatorio)
        const colorSeleccionado = colores[[numeroAleatorio]]
        combinacion.push(colorSeleccionado)
    }
    console.log(combinacion)
    return combinacion
})
const cambioColores =(()=>{
    let colorElegido= colores[posicionColor]
    posicionColor=(posicionColor+1)%colores.length
    return colorElegido
})
document.addEventListener('click',(evento)=>{
    if (evento.target.id==='circulo1'){
        colorElegido1=cambioColores()
        circulo1.style.background=colorElegido1
    } if (evento.target.id==='circulo2'){
        colorElegido2=cambioColores()
        circulo2.style.background=colorElegido2
    } if(evento.target.id==='circulo3'){
        colorElegido3=cambioColores()
        circulo3.style.background=colorElegido3
    } if(evento.target.id==='circulo4'){
        colorElegido4=cambioColores()
        circulo4.style.background=colorElegido4
    } if(evento.target.id==='botonCheck'){
        intento.push(colorElegido1,colorElegido2,colorElegido3,colorElegido4)
        console.log(intento)
    }
})

// const verificar=((combinacion,intento)=>{
//  if(combinacion===intento){

//  } if(combinacion!=intento && )
// })

