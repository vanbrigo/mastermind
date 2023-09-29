const color1 =document.getElementById('colorUno')
const color2 =document.getElementById('colorDos')
const color3 =document.getElementById('colorTres')
const color4 =document.getElementById('colorCuatro')
const color5 =document.getElementById('colorCinco')
const color6 =document.getElementById('colorSeis')
const colors =[color1,color2,color3,color4,color5,color6]

const combinacionAleatoria = (() => {
    const combinacion = []
    for (i = 0; i <= 3; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 6)
        console.log(numeroAleatorio)
        const colorSeleccionado = colors[[numeroAleatorio]]
        combinacion.push(colorSeleccionado)
    }
    console.log(combinacion)
    return combinacion
})

const seleccionColorCirculo=(()=>{
    

})

