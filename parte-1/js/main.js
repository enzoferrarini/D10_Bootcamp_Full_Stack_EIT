//Instanciamos la clase libro para crear uno de ellos
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown')
console.log(unLibro);

//Punto 3 PARTE-1
unLibro.mostrarDatosEnConsola();

//Punto 4 PARTE-1
unLibro.mostrarDatosEnAlert();

//Punto 5 PARTE-1
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo;
alert(tituloDelNuevoLibro);

//Punto 6 PARTE-1
nuevolibro.mostrarDatos('alert');   // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en una vantanita alert
nuevolibro.mostrarDatos('console'); // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en la consola
nuevolibro.mostrarDatos();   // Imprime "Fuego y Sangre, de GEORGE R. R. MARTIN" en la consola
