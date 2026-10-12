
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

  document.getElementById("parametros").classList.add("activa");tasaInteres
  document.getElementById("parametros").classList.remove("activa");
  document.getElementById("parametros").classList.remove("activa");

  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios

function ocultarSeccion() {
  document.getElementById("parametros").classList.remove("activa");
  document.getElementById("tasaInteres").classList.remove("activa");
  document.getElementById("mensajeTasa").classList.remove("activa");
  document.getElementById("clientes").classList.remove("activa");
  document.getElementById("tablaClientes").classList.remove("activa")

}

function mostrarSeccion(idSeccion) {
  ocultarSeccion("parametros");
  document.getElementById(idSeccion).classList.add("activa");
}