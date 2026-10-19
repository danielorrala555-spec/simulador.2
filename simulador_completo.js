
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;
  let estadoBoton = document.getElementById("btnSolicitarCredito");
  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios

function ocultarSecciones() {
    let secciones = document.querySelectorAll("section");

    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });
}
function mostrarSeccion(idSeccion){
  ocultarSecciones();
  document.getElementById(idSeccion).classList.add("activa");
}
// ---------------------------[[[ validacion agregar tasa ]]]-----------------------//
function validacionTasa(numero, maximo, minimo, idError){
  let mensaje = "";
  if(!Number.isFinite(numero)){
        mensaje = "Ingresa una tasa válida  🚫";
    }else if( numero < minimo || numero >maximo){
        mensaje = `la tasa debe ser entre ${minimo} y ${maximo} 🚫`;
  }
  document.getElementById(idError).textContent = mensaje;
  return mensaje;
}

function guardarTasa(){
  let nuevaTasa = recuperarFloat("tasaInteres");
  let mensaje =validacionTasa(nuevaTasa, 20, 10, "mensajeTasa");
    if (mensaje !== ""){
      return
    }
      tasaInteres = nuevaTasa;
      document.getElementById("mensajeTasa").textContent="tasa configurada correctamente "+tasaInteres+"✅"
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
  let validarCliente;
  nuevoCliente.cedula = nuevaCedula;
  nuevoCliente.nombre = nuevoNombre;
  nuevoCliente.apellido = nuevoApellido;
  nuevoCliente.ingresos = nuevoIngreso
  nuevoCliente.egresos = nuevoEgreso
  let nombre =validacion("txtNombre");
  let apellido =validacion("txtApellido");
  let cedula =validacion("txtCedula");
  let ingresos =validacion("txtIngresos", );
  let egresos =validacion("txtEgresos");
  let mensaje=""
  if(
    cedula === false || nombre === false || apellido === false || ingresos === false || egresos === false){
      return alert(mensaje="datos incompletos. no se puede guardar el cliente")
    }


  //llama a modificarCcliente, si no existe ño agrega caso contrario lo crea//
  validarCliente = modificarCliente(nuevoCliente)
  if(validarCliente){
    pintarClientes(clientes, tablaCliente);
  }else{
    agregarCliente(nuevoCliente);
  pintarClientes(clientes, tablaCliente)
  }
    
}

function validacion(campo, idMensaje){
  let valor = recuperarTexto(campo);
  if(valor.trim() === ""){
    return false
  }
  return true
}
function modificarCliente(datosAdd) {
    let cliente = buscarCliente(datosAdd.cedula);

    if (cliente) {
        cliente.nombre = datosAdd.nombre;
        cliente.apellido = datosAdd.apellido;
        cliente.ingresos = datosAdd.ingresos;
        cliente.egresos = datosAdd.egresos; 
        return cliente;
    }else{
      return cliente;
    }

}

function agregarCliente(nvCliente){
  clientes.push(nvCliente)
}

function pintarClientes(array, idTabla){
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
         contenido += "<tr><td>"+array[i].cedula+"</td>"+
                      "<td>"+array[i].nombre+"</td>"+
                      "<td>"+array[i].apellido+"</td>"+
                      "<td>"+array[i].ingresos+"</td>"+
                      "<td>"+array[i].egresos+"</td>"+
                      "<td>"+
                      "<button onclick='seleccionarCliente("+JSON.stringify(array[i].cedula)+")'>Actualizar</button>"+
                      "</td></tr>"
        }
        idTabla.innerHTML = contenido;
}
//***********---------------------------------------------*********** *//

function buscarCliente(cedula) {
    const cliente = clientes.find(usuario => usuario.cedula === cedula) ?? null; // HORA RETORNA NULL SIN AFECTAR A LOS IF DE LAS DEMAS FUNCIONES //
            return cliente;
}
//si el cliente existe su info se mostrara en los imputs de texto, caso contrario se mostrara el mensaje//
function seleccionarCliente(cedula){
        clienteSeleccionado = buscarCliente(cedula);
        if (clienteSeleccionado) {
          mostrarTextoEnCaja("txtNombre", clienteSeleccionado.nombre);
          mostrarTextoEnCaja("txtApellido", clienteSeleccionado.apellido);  
          mostrarTextoEnCaja("txtCedula", clienteSeleccionado.cedula);  
          mostrarTextoEnCaja("txtIngresos", clienteSeleccionado.ingresos);
          mostrarTextoEnCaja("txtEgresos", clienteSeleccionado.egresos);
        }else{
          alert("El cliente con la cédula " + cedula + " no existe");
        }
}

function limpiar(){
  let mensaje=""
  mostrarTextoEnCaja("txtNombre", mensaje);
  mostrarTextoEnCaja("txtApellido", mensaje);  
  mostrarTextoEnCaja("txtCedula", mensaje);  
  mostrarTextoEnCaja("txtIngresos", mensaje);
  mostrarTextoEnCaja("txtEgresos", mensaje);

}

//-------------------------------------[[[[[ buscar cliente y mostar datos en pantalla  ]]]]]------------------------------//
function buscarClienteCredito(){
let clienteCredito = recuperarTexto("buscarCedulaCredito")
let tablaCliente = document.getElementById("datosClienteCredito")
let cliente = buscarCliente(clienteCredito)
if(cliente){
  pintarClienteCredito(cliente, tablaCliente)
  }else{
    tablaCliente.innerHTML= "cliente no encontrado  ❌"
  }
}
function pintarClienteCredito(cliente, idInformacion){
  let infoCliente = "<h3>Datos del Cliente</h3>"+
    "<p><strong>Cédula:</strong>"+cliente.cedula+"</p>"+
    "<p><strong>Nombre:</strong>"+cliente.nombre+"</p>"+
    "<p><strong>Apellido:</strong>"+cliente.apellido+"</p>"+
    "<p><strong>Ingresos:</strong>"+cliente.ingresos+"</p>"+
    "<p><strong>Egresos:</strong>"+cliente.egresos+"</p>";
  idInformacion.innerHTML = infoCliente
}

function calcularCredito(){
  let resultadoCredito = document.getElementById("resultadoCredito")
  let clienteCredito = recuperarTexto("buscarCedulaCredito")
  let cliente = buscarCliente(clienteCredito)
      // RECUPERAR VALORES

    let txtTazaInteres = recuperarFloat("tasaInteres");
    let txtmonto = recuperarInt("montoCredito");
    let txtPlazo = recuperarInt("plazoCredito");
    if (cliente === null) {
        resultadoCredito.textContent = "cliente no existe ❌";
        return;
        }
    if(!Number.isFinite(txtmonto) || !Number.isFinite(txtPlazo) || txtmonto <= 0 || txtPlazo <= 0) {
    resultadoCredito.className = "rechazado";
    resultadoCredito.textContent ="El monto y el plazo deben ser mayores que cero.";
    return;
  }

    // CÁLCULOS

    let disponible =
        calcularDisponible(cliente.ingresos, cliente.egresos);

    let capacidadPago =
        calcularCapacidadDePgo(disponible);

    let interes =
        calcularInteresSimple(
            txtmonto,
            txtPlazo,
            txtTazaInteres
        );

    montoCalculado =
        calcularTotalPagar(
            txtmonto,
            interes
        );

    cuotaCalculada =
        calcularCuotaMensual(
            montoCalculado,
            txtPlazo
        );


    // EVITAR VALORES NEGATIVOS

    if (disponible < 0 && capacidadPago < 0) {
        disponible = 0;
        capacidadPago = 0;
    }


    // APROBAR O RECHAZAR CRÉDITO

    creditoAprobado =
        aprobarCredito(
            capacidadPago,
            cuotaCalculada
        );

    let mensajeCredito;

    if (creditoAprobado === true) {
        mensajeCredito = " CREDITO APROBADO ✅";
    resultadoCredito.className = "aprobado";
    estadoBoton.disabled = false
    } else {
        mensajeCredito = " CREDITO RECHAZADO ❌";
    resultadoCredito.className = "rechazado";
    estadoBoton.disabled = true
    }

let mensaje = "Capacidad de pago: "+capacidadPago +"<br>"+
"Total a pagar: " +montoCalculado +" <br>"+
"Cuota mensual: " +cuotaCalculada.toFixed(2)+"<br>"+
"RESULTADO: " +mensajeCredito+"<br>"
    // MOSTRAR RESULTADOS
resultadoCredito.innerHTML = mensaje

}

function solicitarCredito(){
  let plazoTotal = recuperarInt("plazoCredito")
  plazoCalculado = plazoTotal*12;
  let cedulas = recuperarTexto("buscarCedulaCredito");
  let clienteSeleccionado = buscarCliente(cedulas)
  if (creditoAprobado === true){
    let credito = {
    cedula: clienteSeleccionado.cedula,
    nombre: clienteSeleccionado.nombre,
    apellido: clienteSeleccionado.apellido,
    monto: montoCalculado,
    tasa: tasaInteres,
    plazo: plazoCalculado,
    cuota: cuotaCalculada
    };
    creditos.push(credito)
    alert("✅ Crédito asignado correctamente");
  }
}

function buscarCreditos(cedula){
  let datosCreditoCliente = [];
    for (let i = 0 ;i<creditos.length;i++){
        if (cedula == creditos[i].cedula){
        datosCreditoCliente.push(creditos[i])
        } 
    }
    return datosCreditoCliente
}

function pintarCreditos (creditos){
  let tabla = document.getElementById("tablaCreditos");
  let elementosTabla = "";
  for (let i = 0 ; i< creditos.length;i++){
      let datosCreditos = creditos[i]
      elementosTabla += "<tr><td>"+datosCreditos.cedula+"</td>"+
      "<td>"+datosCreditos.nombre+"</td>"+
      "<td>"+datosCreditos.apellido+"</td>"+
      "<td>"+datosCreditos.monto.toFixed(2)+"</td>"+
      "<td>"+datosCreditos.tasa+" %"+"</td>"+
      "<td>"+datosCreditos.plazo+" meses</td>"+
      "<td>"+datosCreditos.cuota.toFixed(2)+"</td></tr>"
      
  }
  tabla.innerHTML = elementosTabla;

}

function buscarCreditosCliente(){
  let cedula = recuperarTexto("buscarCedulaListado")
  let datos =buscarCreditos(cedula)
  pintarCreditos (datos)
}