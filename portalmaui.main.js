var saldoActual = 67;

function checarsaldo() {
  alert("Tu saldo actual es: " + saldoActual);
}

function depositar() {
  var cantidad = prompt("Ingresa la cantidad a depositar:");
  cantidad = parseInt(cantidad);

  if (cantidad > 0 && saldoActual + cantidad <= 990) {
    saldoActual += cantidad;
    alert("Se ha depositado exitosamente. Tu nuevo saldo es: " + saldoActual);
  } else {
    alert("No se puede depositar esa cantidad. debido a que no cuentas con la cuenta ORO de bancocar comunicate con el gerente lic carlos alberto martinez gacria. cel. 9581420670");
  }
}

function retirar() {
  var cantidad = prompt("Ingresa la cantidad a retirar:");
  cantidad = parseInt(cantidad);

  if (cantidad > 0 && saldoActual - cantidad >= 10) {
    saldoActual -= cantidad;
    alert("Se ha retirado exitosamente. Tu nuevo saldo es: " + saldoActual);
  } else {
    alert("No se puede retirar esa cantidad. debido a que no cuentas con la cuenta ORO de bancocar comunicate con el gerente lic carlos alberto martinez gacria. cel. 9581420670.");
  }
}





