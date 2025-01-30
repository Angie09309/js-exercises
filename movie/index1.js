class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
    }

    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }

    validarCadena(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} ${valor} excede el numero de caracteres permitidos (${longitud}).`);

        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} ${valor} esta vacio`);

        if (typeof valor !== "number") return console.warn(`${propiedad} ${valor} ingresado, No es un numero`);

        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} ${valor} esta vacio`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} ${valor} ingresadp No es un arreglo`);

        if (valor.length === 0) return console.error(`${propiedad} ${valor} no tiene datos`);

        for (let cadena of valor) {
            if (typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, No es una cadena de texto`);
        }

        return true;
    }


    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minisculas, los 7 restantes numeros.`);
            }
        }
    }


    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);
    }


    validarDirector(director) {
        if (this.validarCadena("Director", director))
            this.validarLongitudCadena("director", director, 50);
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno))
            if (!(/^([0-9]){4}$/.test(estreno)))
                return console.error(`Año de estreno "${estreno}" no es valido, debe ser un numero de 4 digitos.`);
    }

    validarPais(pais) {
        this.validarArreglo("Pais", pais)
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Generos", generos)) {
            for (let genero of generos) {
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Genero(s) incorrectos ${generos.join(",")}`);
                    Pelicula.generosAceptados();
                }
            }
        }
    }
}

// Pelicula.generosAceptados();
const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la peli",
    director: "Director de la peli",
    estreno: 2021,
    pais: ["Mexico", "Francia"],
    generos: ["comedia"]

});
