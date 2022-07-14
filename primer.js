
class Otra{
    despedida() {
      console.log('Hasta luego')
    }
  }
  
  class Usuario extends Otra{
    constructor(nombre, getBooks, animales) {
      super()
      this.nombre = nombre
      this.getBooks = getBooks
      this.animales = animales
    }
    static saludar() { console.log('Hola Ususario') }
  
    mostrarNombre() {
      console.log(this.nombre)
      this.#mostrarAnimales()
    }
  
    #mostrarAnimales() {
      console.log(this.animales)
    }
  }
  Usuario.saludar()
  const cliente = new Usuario('Matias', 'La virgen en sus ojos', 'gato')
  console.log(cliente, typeof cliente)
  cliente.mostrarNombre()
  

