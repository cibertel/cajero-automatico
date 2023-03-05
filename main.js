
var usuarios = [
  {usuario: "Mali", contraseña: "123", saldo:"200"},
  {usuario: "Gera", contraseña: "456", saldo:"290"},
  {usuario: "Maui", contraseña: "789", saldo:"67"}
];



function login() {
  var user = prompt("Ingrese su nombre de usuario:");
  var pass = prompt("Ingrese su contraseña:");

  for (var i = 0; i < usuarios.length; i++) {
    if (user == usuarios[i].usuario && pass == usuarios[i].contraseña) {
      alert("Bienvenido, " + user + "!\n" + "Su saldo actual es: $" + usuarios[i].saldo);
      switch (user) {
        case "Mali":
          window.location.replace("portalmali.html");
          break;
        case "Gera":
          window.location.replace("portalgera.html");
          break;
        case "Maui":
          window.location.replace("portalmaui.html");
          break;
        default:
          break;
      }


      
      return; // Salir de la función si se encontró un usuario válido.
    }
  }

  alert("Usuario o contraseña incorrectos.");
}

document.getElementById("loginButton").addEventListener("click", login);



