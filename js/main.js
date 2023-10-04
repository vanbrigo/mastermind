const coloresElegidosUsuario=[]
const botonSave=document.getElementById('botonSave')
const botonCheck=document.getElementById('botonCheck')
const options=document.querySelectorAll('.colors-selection')
const circles=document.querySelectorAll('.colors-selected')
const player=document.getElementById('player')
const playerName=player.value

let numeroMaximo=5

options.forEach(Element=>{
    let style=window.getComputedStyle(Element)
    background=style.backgroundColor
    if (background.startsWith("rgb")) {
        let valoresRGB = background.match(/\d+/g);
        let r = parseInt(valoresRGB[0]);
        let g = parseInt(valoresRGB[1]);
        let b = parseInt(valoresRGB[2]);
    
        let colorHexadecimal = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
        console.log(colorHexadecimal)

        document.addEventListener('click',(eleccion)=>{
            if(eleccion.target.id===Element.id && coloresElegidosUsuario.length<=numeroMaximo){
                coloresElegidosUsuario.push(colorHexadecimal)
            } 
        }) 
      }    
})

document.addEventListener('click',(e)=>{
    if(e.target.id===('botonSave') && coloresElegidosUsuario.length==6){
        localStorage.setItem('colores',JSON.stringify(coloresElegidosUsuario))
    } if(e.target.id===('botonNext') && playerName>=3){
        localStorage.setItem('player', playerName)
        console.log(player.value)
    } 
})

// document.addEventListener('click',(eleccion)=>{
//     if(eleccion.target.id==='color1' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#56ff50')
//     } if(eleccion.target.id==='color2' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#ff1493')
//     } if(eleccion.target.id==='color3' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#8a2be2')
//     } if(eleccion.target.id==='color4' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#ffd700')
//     } if(eleccion.target.id==='color5' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#ff0000')
//     } if(eleccion.target.id==='color6' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#00b7ff')
//     } if(eleccion.target.id==='color7' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#ff8c00')
//     } if(eleccion.target.id==='color8' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#3442d9')
//     } if(eleccion.target.id==='color9' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#d96ccc')
//     } if(eleccion.target.id==='color10' && coloresElegidosUsuario.length<=numeroMaximo){
//         coloresElegidosUsuario.push('#48e0cb')
//     } if(eleccion.target.id==='botonSave' && coloresElegidosUsuario.length==6){
//         localStorage.setItem('colores',JSON.stringify(coloresElegidosUsuario))
//         console.log(coloresElegidosUsuario.length)
//     } if(eleccion.target.id==='botonNext'){
        
//     }
// })

