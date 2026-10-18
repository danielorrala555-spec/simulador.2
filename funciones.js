//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos){
    let resultado = ingresos - egresos;
    return resultado
}

function calcularCapacidadDePgo(disponible){
    let capacidadPago = disponible/2;
    return capacidadPago   
}

function calcularInteresSimple(monto, plazo, tasa, ){
  let interesBr = plazo * monto * tasa;
  let interes = (interesBr / 100);
  return interes;
}

function calcularTotalPagar(monto, interes){
    let totalPagar = monto + interes + 100 /* $100 interes a SOLCA*/ ;
    return totalPagar
}

function calcularCuotaMensual(prTotal, años){
    let meces = años*12;
    let total = prTotal/ meces;
    return total
}

function aprobarCredito(capacidadPago, cuotas){
if(capacidadPago > cuotas){
    return true;
}else{
    return false;
} 
    
}