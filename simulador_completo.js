
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;
  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios

function ocultarSeccion() {
  document.getElementById("parametros").classList.remove("activa");
  document.getElementById("mensajeTasa").classList.remove("activa");
  document.getElementById("clientes").classList.remove("activa");
  document.getElementById("tablaClientes").classList.remove("activa")

}

function validacion(numero, maximo, minimo, idError){
  let mensaje = "";
  if(!Number.isFinite(numero)){
        mensaje = "Ingresa una tasa válida";
    }else if( numero < minimo || numero >maximo){
        mensaje = `la tasa deve ser enre ${minimo} y ${maximo}`;
  }
  document.getElementById(idError).textContent = mensaje;
  return mensaje;
}

function mostrarSeccion(idSeccion){
  ocultarSeccion("parametros");
  document.getElementById(idSeccion).classList.add("activa");
}

function guardarTasa(){
  let nuevaTasa = recuperaraTexto("tasaInteres");π
  let mensaje =validacion(nuevaTasa, 20, 10, "mensajeTasa");
    if (!mensaje == ""){
      return
    }
      tasaInteres = nuevaTasa;
      document.getElementById("mensajeTasa").textContent="tasa guardada correctamente"
   
    
}
