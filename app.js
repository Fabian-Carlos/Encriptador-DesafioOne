let mensaje;
let letrasMensaje=[];
let mensajeCopiado="";

const textarea = document.getElementById('mensaje');

// Escucha el evento 'input' en el textarea
textarea.addEventListener('input', () => {
    const inputValue = textarea.value;

    // Verifica si el valor contiene caracteres no permitidos
    if (/[^a-z\s]/.test(inputValue)) {
        // Si hay caracteres no permitidos, elimina el último carácter ingresado
        textarea.value = inputValue.slice(0, -1);
    }
});

function encriptarMensaje(){
    var mensaje=document.getElementById("mensaje").value;
    if (verificarMensaje(mensaje)==0){
        return;
    }
   var texto;
   var tamaño;
   var contador;
   contador=0;
   tamaño=mensaje.length;
   letrasMensaje=[];
   while (contador!=tamaño){
    texto=mensaje.substr(contador,1);
   
  
   if (texto=='a'){
        
        letrasMensaje.push('ai');
    }
    else 
    {
        if(texto=='e'){
            
            letrasMensaje.push('enter');
        }
        else{
            if(texto=='i'){
               
                letrasMensaje.push('imes');
            }
            else{
                if(texto=='o'){
                    
                    letrasMensaje.push('ober');
                }else{
                    if(texto=='u'){
                        
                        letrasMensaje.push('ufat');
                    }else{
                        letrasMensaje.push(texto);
                        
                    }
                }
            }
        }
    }
    contador++;
  
   }

   mostrarMensaje();

}

function verificarMensaje(mensaje){
    let elementoHTML=document.querySelector('h2');
    console.log(mensaje);
    console.log(mensaje.length);
   if(mensaje.length==0){
    console.log('entro');
   
    elementoHTML.innerHTML='<img src="imagenes/Muñeco.png"style="margin-top:243px"><h3 style=" margin: 0px 15px; font-family: Inter; font-size: 24px; color:#343A40; font-weight: bold; text-align: center;line-height: 120% ;">Ningún mensaje fue encontrado</h3><h4 style=" margin: 16px 10px; font-family: Inter; font-size: 16px; color:#495057; text-align: center;line-height: 150% ;">Ingresa el texto que desees encriptar o desencriptar.</h4>';
    const miDiv=document.getElementById("panelDerecha");
    var existenciaBoton;
     existenciaBoton=miDiv.querySelector('input');
     if(existenciaBoton){
        console.log('entro aqui');
         console.log(existenciaBoton);
         existenciaBoton.parentNode.removeChild(existenciaBoton);
     }
    return 0;
   }else{
    return 1;
   }
  


}

function mostrarMensaje(){
    var mensajeFinal;
    mensajeFinal="";
    var contadorb;
    contadorb=0;
    var tamañoArreglo;
    
    tamañoArreglo=letrasMensaje.length;
   while(contadorb!=tamañoArreglo){
        mensajeFinal=mensajeFinal+letrasMensaje[contadorb];
        contadorb++;
    }
  const miDiv=document.getElementById("panelDerecha");
    console.log(miDiv);
    var existenciaBoton;
    existenciaBoton=miDiv.querySelector('input');
    if(!existenciaBoton){
        const botonCopiar=document.createElement("input");       
        botonCopiar.type="submit";
        botonCopiar.value="Copiar";
        botonCopiar.className="copiar";
        botonCopiar.style="margin-bottom:32px; width:328px; height:67px; font-family:Inter; padding:15px 0; font-size:16px; border-radius:24px; transition: 1s all; cursor:pointer; margin-left: auto; margin-right:auto;";
        botonCopiar.addEventListener("click",copiarMensaje);
        console.log('va salir');
        miDiv.append(botonCopiar);
    }


    document.getElementById("mensaje").value="";

    let elementoHTML=document.querySelector('h2');
   elementoHTML.innerHTML=mensajeFinal;



mensajeCopiado=mensajeFinal;
    return;
}

function copiarMensaje(){
    /*console.log("entro");
    document.getElementById("mensaje").value=mensajeCopiado;
    console.log(mensajeCopiado);*/

 
    var content = document.querySelector('h2');
   

    navigator.clipboard.writeText(content.textContent);
}
function desencriptarMensaje(){
    var mensaje=document.getElementById("mensaje").value;
    if (verificarMensaje(mensaje)==0){
        return;
    }
   var texto;
   var tamaño;
   var contador;
   contador=0;
   tamaño=mensaje.length;
   letrasMensaje=[];
   while (contador!=tamaño){
    texto=mensaje.substr(contador,1);
   
  
   if (texto=='a'){
        if(mensaje.substr(contador,2)=='ai'){
            letrasMensaje.push('a');
            contador++;
        }
       
    }
    else 
    {
        if(texto=='e'){
            if(mensaje.substr(contador,5)=='enter'){
                letrasMensaje.push('e');
                contador=contador+4;
            }
            
        }
        else{
            if(texto=='i'){
                if(mensaje.substr(contador,4)=='imes'){
                    letrasMensaje.push('i');
                    contador=contador+3;
                }
               
                
            }
            else{
                if(texto=='o'){
                    if(mensaje.substr(contador,4)=='ober'){
                        letrasMensaje.push('o');
                        contador=contador+3;
                    }
                    
                }else{
                    if(texto=='u'){
                        if(mensaje.substr(contador,4)=='ufat'){
                            letrasMensaje.push('u');
                            contador=contador+3;
                        }
                        
                        
                    }else{
                        letrasMensaje.push(texto);
                        
                    }
                }
            }
        }
    }
    contador++;
  
   }

   mostrarMensaje();

}
