function recuperarTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    }
    
    function recuperarInt(idComponente){
        let valorCaja=recuperarTexto(idComponente);
        let valorEntero=parseInt(valorCaja);
        return valorEntero;
    }
    function recuperarFloat(idComponente){
        let valorCaja=recuperarTexto(idComponente);
        let valorFlotante=parseFloat(valorCaja);
        return valorFlotante;
    }
    function mostrarTexto(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.innerText=mensaje;
    }
    function mostrarTextoEnCaja(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.value=mensaje;
    }
    
    function mostrarImagen(idComponente,rutaImagen){
        let componente;
        componente=document.getElementById(idComponente);
        componente.src = rutaImagen;
    
    }

    function validarCampos(...campos) {
    for (let campo of campos) {
        if (campo.trim() === "") {
            return false;
        }
    }

    return true;
}

function mostarEnEspam(idComponente, valor){
    let componente = document.getElementById(idComponente);
     componente.textContent = valor;
}