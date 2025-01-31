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
        this.validarCalificacion(calificacion);
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

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion))
            return (calificacion < 0 || calificacion > 10)
                ? console.error("La calificacion tiene que estar en un rengo entre 0 y 10.")
                : this.calificacion = calificacion.toFixed(1);
    }


    fichaTecnica() {
        console.info(`Ficha Tecnica:\nTitulo:${this.titulo}\nDirector:${this.director}\nAño:${this.estreno}\nPais:${this.pais.join("-")}\nGeneros:${this.generos.join(",")}\nCalificacion:${this.calificacion}\nIMDB id:${this.id}`)
    }
}


// Pelicula.generosAceptados();
const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la peli",
    director: "Director de la peli",
    estreno: 2021,
    pais: ["Mexico", "Francia"],
    generos: ["Comedy"],
    calificacion: 7.567

});

peli.fichaTecnica();

const misPelis = [
    {
        id: "tt1234567",
        titulo: "Inception",
        director: "Christopher Nolan",
        estreno: 2010,
        pais: ["Estados Unidos", "Reino Unido"],
        generos: ["Action", "Sci-Fi", "Thriller"],
        calificacion: 8.8

    },

    {
        id: "tt7654321",
        titulo: "Parasite",
        director: "Bong Joon-ho",
        estreno: 2019,
        pais: ["Corea del Sur"],
        generos: ["Comedy", "Drama", "Thriller"],
        calificacion: 8.6
    },

    {
        id: "tt2345678",
        titulo: "The Godfather",
        director: "Francis Ford Coppola",
        estreno: 1972,
        pais: ["Estados Unidos"],
        generos: ["Crime", "Drama"],
        calificacion: 9.2
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());