//Declaracion de la clase libro
class Libro {
    //Propiedadaes Privadas Solo pueden ser accedidas desde la clase.
    #titulo;
    #autor;
    #precio;
    #isbn;
    #paginas;
    #idioma;
    #foto;
    #sinopsis;

    //Metodos
    constructor(titulo,autor,precio, isbn, paginas, idioma, foto, sinopsis){
        this.#titulo=titulo;
        this.#autor=autor;
        this.#precio=precio;
        this.#isbn=isbn;
        this.#paginas=paginas;
        this.#idioma=idioma;
        this.#foto=foto;
        this.#sinopsis=sinopsis;
    }

    //Setters
    set setTitulo(titulo){this.#titulo=titulo;}
    set setAutor(autor){this.#autor=autor;}
    set setPrecio(precio){this.#precio=precio;}
    set setIsbn(isbn){this.#isbn=isbn;}
    set setPaginas(paginas){this.#paginas=paginas;}
    set setIdioma(idioma){this.#idioma=idioma;}
    set setFoto(foto){this.#foto=foto;}
    set setSinopsis(sinopsis){this.#sinopsis=sinopsis;}

    //Getters
    get getTitulo(){return this.#titulo;}
    get getAutor(){return this.#autor;}
    get getPrecio(){return this.#precio;}
    get getIsbn(){return this.#isbn;}
    get getPaginas(){return this.#paginas;}
    get getIdioma(){return this.#idioma;}
    get getFoto(){return this.#foto;}
    get getSinopsis(){return this.#sinopsis;}

    //Defino un Metodo privado que no puede ser accedido desde afuera sino dentro de la clase
    #obtenerDatos(){
        return `${this.getTitulo}, de ${this.getAutor.toUpperCase()} 
        Precio: ${this.getPrecio}, Isbn: ${this.getIsbn}, 
        áginas: ${this.getPaginas}, Idioma: ${this.getIdioma}, 
        Sinopsis: ${this.getSinopsis}`
    }

    getHtmlArticle(){
        return `
        <article>
            <h2>${this.getTitulo}</h2>
            <h3><span class="de">de</span> ${this.getAutor} </h3>
            <div class="informacion">
                <a href="img/${this.getFoto}" title="Presioná para ver la imagen en tamaño grande" target="_blank">
                    <img src="./img/${this.getFoto}" alt="Portada de ${this.getTitulo}">
                </a>
                <p>
                    <span>Precio:</span>
                    <span>${this.getPrecio}</span>
                </p>
                <p>
                    <span title="International Standard Book Number">ISBN:</span>
                    <span>${this.getIsbn}</span>
                </p>
                <p>
                    <span>Páginas:</span>
                    <span>${this.getPaginas}</span>
                </p>
                <p>
                    <span>Idioma:</span>
                    <span>${this.getIdioma}</span>
                </p>
            </div>
            <div class="sinopsis">
                <p>${this.getSinopsis}</p>
            </div>
            <div class="gradiente-blanco"></div>
        </article>`
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

class Libreria{
    #libros;

    constructor(arrayLibros){
        this.#libros=new Array();
        for (let index = 0; index < arrayLibros.length; index++) {
            this.#libros.push(arrayLibros[index]);   
        }    
    }

    cargarElementoConLibros(idDestino){
        let sectionDestino=document.getElementById(idDestino);
        for (let index = 0; index < this.#libros.length; index++) {
            sectionDestino.innerHTML=sectionDestino.innerHTML.concat(this.#libros[index].getHtmlArticle());
            
        }
    }
}


