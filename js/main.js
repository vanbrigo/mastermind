const colores=['#56ff50','#ff1493','#8a2be2','#ffd700','#ff0000','#00b7ff']
const circulo1=document.getElementById('circulo1')
const circulo2=document.getElementById('circulo2')
const circulo3=document.getElementById('circulo3')
const circulo4=document.getElementById('circulo4')
let posicionColor=0

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
    console.log(posicionColor)
    console.log(colorElegido)
    return colorElegido
})

document.addEventListener('click',(evento)=>{
    if (evento.target.id==='circulo1'){
        let colorElegido=cambioColores()
        circulo1.style.background=colorElegido
    } if (evento.target.id==='circulo2'){
        let colorElegido=cambioColores()
        circulo2.style.background=colorElegido
    } if(evento.target.id==='circulo3'){
        let colorElegido=cambioColores()
        circulo3.style.background=colorElegido
    } if(evento.target.id==='circulo4'){
        let colorElegido=cambioColores()
        circulo4.style.background=colorElegido
    }
})

