// Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


class Usuario {
  constructor(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
    this.saludar = function() {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }
}

var objMauri = {
  usuario: 'mauri91',
  nombre: 'mauricio',
  email: 'mauri@gmail.com',
  password: '1234'
}

var mauricio = new Usuario(objMauri);

console.log(mauricio.nombre);
