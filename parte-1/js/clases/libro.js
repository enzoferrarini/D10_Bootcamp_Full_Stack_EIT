//Declaracion de la clase libro
class Libro {
    //Propiedadaes Privadas Solo pueden ser accedidas desde la clase.
    #titulo;
    #autor;

    //Metodos
    constructor(titulo,autor){
        this.#titulo=titulo;
        this.#autor=autor;
    }

    //Setters
    set setTitulo(titulo){
        this.#titulo=titulo;
    }

    set setAutor(autor){
        this.#autor=autor;
    }

    //Getters
    get getTitulo(){
        return this.#titulo;
    }

    get getAutor(){
        return this.#autor;
    }

    //Defino un Metodo privado que no puede ser accedido desde afuera sino dentro de la clase
    #obtenerDatos(){
        return `${this.#titulo}, de ${this.#autor.toUpperCase()}`;
    }

    mostrarDatosEnConsola(){       
        console.log(this.#obtenerDatos());
    }

    mostrarDatosEnAlert(){
        alert(this.#obtenerDatos());
    }

    mostrarDatos(tipo) {
        //Paso el Tipo a MAYUSCULA para que en caso de pasar ALERT, Alert, AleRT 
        //siempre funciones interpretando el tipo de forma de mostrar        
        if(tipo && !(tipo === undefined))
            tipo=tipo.toUpperCase();
       
        switch (tipo) {
            case "CONSOLE":
                this.mostrarDatosEnConsola();
                break;
            case "ALERT":
                this.mostrarDatosEnAlert();
                break;
            default:
                //Por default, sino pasa el Tipo o esta ma escrito
                //muestra por consola directemente
                this.mostrarDatosEnConsola();
                break;
        }
    }

}

