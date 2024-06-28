//las llaves de encriptacion
const LLAVE_A = 'ai' ;
const LLAVE_E = 'enter';
const LLAVE_I = 'imes';
const LLAVE_O = 'ober';
const LLAVE_U = 'ufat';

function borrarTexto() {
    document.getElementById('textoUsuario').value = '';
}

function ocultarInformacion(){
    document.getElementById('ocultarResultado').style.display = 'none';
    document.getElementById('botonCopiar').style.visibility = 'visible';
}

function encriptarMensaje(){
    
    ocultarInformacion();

    let texto = document.getElementById('textoUsuario').value;

    //convierte un string en un arreglo dividido por caracteres
    let letrasTexto = texto.split('');

    //areglo que almacenará los caracteres crifrados (a,e,i,o,u)
    let textoCifrado = [];

    //logica del programa
    letrasTexto.forEach(element => {
        if(element == 'a'){
            textoCifrado.push(LLAVE_A);
        }else{
            if(element == 'e'){
                textoCifrado.push(LLAVE_E);
            } else{
                if(element == 'i'){
                    textoCifrado.push(LLAVE_I);
                }else{
                    if(element == 'o'){
                        textoCifrado.push(LLAVE_O);
                    }else{
                        if(element == 'u'){
                            textoCifrado.push(LLAVE_U);
                        }else{
                            textoCifrado.push(element);
                        }
                    }
                }
            }
        }
    });

    //covierte un arreglo en un string
    let mensajeCifrado = textoCifrado.join('');

    //muestra el mensaje en pantalla
    document.getElementById('mensaje').innerHTML = mensajeCifrado;
    document.getElementById('textoUsuario').value = 'Ingrese el texto aquí';

}

function desencriptarMensaje(){

    ocultarInformacion();

    let mensajeEncriptado = document.getElementById('textoUsuario').value;
    
    mensajeEncriptado = mensajeEncriptado.replace(/ai/g, 'a');
    mensajeEncriptado = mensajeEncriptado.replace(/enter/g, 'e');
    mensajeEncriptado = mensajeEncriptado.replace(/imes/g, 'i');
    mensajeEncriptado = mensajeEncriptado.replace(/ober/g, 'o');
    mensajeEncriptado = mensajeEncriptado.replace(/ufat/g, 'u');

    //muestra el mensaje en pantalla
    document.getElementById('mensaje').innerHTML = mensajeEncriptado;
    document.getElementById('textoUsuario').value = 'Ingrese el texto aquí';
}

function copiarMensaje(){

    let contenido = document.getElementById('mensaje').innerText;
    
    let textareaTemp = document.createElement('textarea');
    //para que el textarea temporal no se vea en pantalla
    textareaTemp.style.position = 'absolute';
    textareaTemp.style.left = '-9999px'; 
    textareaTemp.value = contenido;

    //agregar el textarea temporal al documento
    document.body.appendChild(textareaTemp);

    //selecciona el contenido del textarea
    textareaTemp.select();
    textareaTemp.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    
}