class SerVivo {
    static caminar(nombre) {
        console.log('Ahora esta caminando: ' + nombre);
    }
}

class Persona extends SerVivo {

    constructor(nombre){
        this.nombre = nombre;
    }
    
    static moverse(nombre) {
        this.caminar(nombre);
    }
}

Persona.moverse('Juanito');