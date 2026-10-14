
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
// ---------------------------[[[ validacion agregar tasa ]]]-----------------------//
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
  let nuevaTasa = recuperarInt("tasaInteres");
  let mensaje =validacion(nuevaTasa, 20, 10, "mensajeTasa");
    if (mensaje !== ""){
      return
    }
      tasaInteres = nuevaTasa;
      document.getElementById("mensajeTasa").textContent="tasa configurada correctamente"
}
//***********-------------------------------------------------*********** *//


//-------------------------[[[ agregarCliente ]]]------------------------//

function guardarCliente(){
  let tablaCliente = document.getElementById("tablaClientes")
  let nuevaCedula = recuperarTexto("txtCedula");
  let nuevoNombre = recuperarTexto("txtNombre");
  let nuevoApellido = recuperarTexto("txtApellido");
  let nuevoIngreso = recuperarInt("txtIngresos");
  let nuevoEgreso = recuperarInt("txtEgresos");
  let nuevoCliente = {}
  nuevoCliente.cedula = nuevaCedula;
  nuevoCliente.nombre = nuevoNombre;
  nuevoCliente.apellido = nuevoApellido;
  nuevoCliente.ingresos = nuevoIngreso
  nuevoCliente.egresos = nuevoEgreso
  
  agregarCliente(nuevoCliente);
  pintarCliente(clientes, tablaCliente) 
}

function agregarCliente(nvCliente){
  clientes.push(nvCliente)
}

function pintarCliente(array, idTabla){
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
         contenido += "<tr><td>"+array[i].cedula+"</td>"+
                      "<td>"+array[i].nombre+"</td>"+
                      "<td>"+array[i].apellido+"</td>"+
                      "<td>"+array[i].ingresos+"</td>"+
                      "<td>"+array[i].egresos+"</td>"+
                      "<td>"+
                      "<button>Actualizar</button>"+
                      "<button>Eliminar</button>"+
                      "</td></tr>"
        }
        idTabla.innerHTML = contenido;
}
//***********---------------------------------------------*********** *//

function buscarCliente(cedula) {
    const cliente = clientes.find(usuario => usuario.cedula === cedula);
            return cliente;
}

function seleccionarCliente(){
  let numeroCdl = recuperarTexto("txtBuscar");
        clienteSeleccionado = buscarCliente(numeroCdl);
        if (clienteSeleccionado) {
          mostrarTextoEnCaja("txtNombre", clienteSeleccionado.nombre);
          mostrarTextoEnCaja("txtApellido", clienteSeleccionado.apellido);  
          mostrarTextoEnCaja("txtCedula", clienteSeleccionado.cedula);  
          mostrarTextoEnCaja("txtIngresos", clienteSeleccionado.ingresos);
          mostrarTextoEnCaja("txtEgresos", clienteSeleccionado.egresos);
          mostrarCliente(clienteSeleccionado);
        }else{
          alert("El cliente con la cédula " + numeroCdl + " no existe");
        }
        
    

}