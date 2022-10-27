  class Usuario{
    constructor(nombre,apellido){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libro = [];
      this.mascota = [];
    }
    getNombrecompleto(){
      console.log(`${this.nombre} ${this.apellido}`)
    }
    agregarMascota(mascota){
      this.mascota.push(mascota)
    }
    agregarLibro(libro, autor){
      this.libro.push({libro, autor})
    }
    getNombreLibro(){
      console.log(this.libro.map((e) => e.libro))
    }
  }
const usuario = new Usuario('Matias', 'Perez')
 usuario.getNombrecompleto()

 usuario.agregarMascota('perro');
 
 usuario.agregarLibro('La virgen en sus ojos', 'Florencia Etcheves');
 usuario.agregarLibro('Cien años de soledad', 'Gabriel García Marquez');
 usuario.getNombreLibro();

