let coloresElegidosUsuario=[]
const botonSave=document.getElementById('botonSave')
const options=document.querySelectorAll('.colors-selection')
const circles=document.querySelectorAll('.colors-selected')
const player=document.getElementById('player')
const botonNext=document.getElementById('botonNext')
const enlaceNext=document.getElementById('enlaceNext')
const enlaceNextA=enlaceNext.id.replace('enlaceNext','enlaceNextA')
let numeroMaximo=5

options.forEach(Element=>{
    let estilo=window.getComputedStyle(Element)
    let background=estilo.backgroundColor
    if (background.startsWith("rgb")) {
        let valoresRGB = background.match(/\d+/g);
        let r = parseInt(valoresRGB[0]);
        let g = parseInt(valoresRGB[1]);
        let b = parseInt(valoresRGB[2]);
        let colorHexadecimal = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
        document.addEventListener('click',(eleccion)=>{
            if(eleccion.target.id===Element.id && coloresElegidosUsuario.length<=numeroMaximo){
                coloresElegidosUsuario.push(colorHexadecimal) 
                for(let i=0;i<circles.length;i++){
                    circles[i].style.backgroundColor=coloresElegidosUsuario[i]
                }
            } 
        }) 
      }    
})
botonSave.addEventListener('click',()=>{
    if(coloresElegidosUsuario.length==6){
        localStorage.setItem('colores',JSON.stringify(coloresElegidosUsuario))
        console.log(JSON.stringify(coloresElegidosUsuario))
        if(player.value.length>=3){
            player.disabled=true
            enlaceNext.id=enlaceNextA
            botonNext.style.backgroundColor='#0bed74ec'
        } else if(player.value.length<3){
            window.alert('You need to insert your nickname')
        }
    } if(coloresElegidosUsuario.length<=5){
        window.alert('You need to pick 6 colors')
    }
})
player.addEventListener('input',()=>{   
if(player.value.length>=3){
    enlaceNext.id=enlaceNextA
    botonNext.style.backgroundColor='#0bed74ec'
    player.addEventListener('change',()=>{
    player.disabled=true})
}else if(player.value.length<3 && coloresElegidosUsuario<6){
    enlaceNext.id='enlaceNext'
    botonNext.style.backgroundColor='#08b3589b'
}
})
botonNext.addEventListener('click',()=>{
    localStorage.setItem('player',player.value)   
    if(coloresElegidosUsuario.length<6){
        coloresElegidosUsuario=["#56ff50","#ff1493","#8a2be2","#ffd700","#ff0000","#00b7ff"]
        localStorage.setItem('colores',JSON.stringify(coloresElegidosUsuario))
    }
    })




// botonNext.addEventListener('click',()=>{
//     if(player.value.length>=3){
//     localStorage.setItem('player',player.value)
//     } else{
        
//     }
// })

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

