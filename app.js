/*
    Build a Library

    Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help.
    They’re still using index cards to organize their content! Yikes.

    But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

    Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create 
    a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following 
    properties and methods:

    Book
    Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), 
    and ratings (array, initially empty).
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()


    Movie
    Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), 
    and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()


    CD
    Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings 
    (array, initially empty), songs (array of strings)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
*/
/*
    Resoluciones extra del ejercicio:

    Añadida la clase CD que extiende de Media
    Añadida a Movie movieCast con su getter
    Añadida una funcion para añadir valores a movieCast
    Añadida restriccion a addRating de pasar valores entre 1 y 5
    Añadida funcion suffle a CD, para devolver las canciones del cd desordenadas
    Añadida una clase catalogo, dicha clase solo acepta elementos Media
    
*/
class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get ratings(){
        return this._ratings;
    }

    //Lo pide el ejercicio pero no se para que
    set isCheckedOut(isCheckedOut){
        this._isCheckedOut = isCheckedOut;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
        return this._ratings.reduce((sumatorio, rating) => sumatorio += rating) / this._ratings.length;
    }

    addRating(rating){
        if(rating >= 1 && rating <= 5){
            this._ratings.push(rating);
        }else{
            console.log('Invalid Rating, introduce a value between 1 and 5');
        }
    }
}

class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director , title, runTime, movieCast){
        super(title);
        this._director  = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }

    get movieCast(){
        return this._movieCast;
    }

    addToMovieCast(newMovieCast){
        this._movieCast.push(newMovieCast);
    }
}

class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist  = artist;
        this._songs = songs;
    }

    get artist(){
        return this._artist;
    }

    get songs(){
        return this._songs;
    }

    suffle(){
        let tempArray = this._songs;
        let output = [];
        while(tempArray.length !== 0){
            let i = Math.floor(Math.random() * tempArray.length);
            output.push(tempArray[i]);
            tempArray.splice(i, 1);
        }
        return output;
    }
}

class Catalog{
    constructor(){
        this._list = []
    }

    addElementToCatalog(element){
        if(element instanceof Media){
            this._list.push(element);
        }else{
            console.log('Not a Media, introduce a media to add it to the list of the catalog');
        }
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

console.table(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, ['Jane Doe', 'John Doe', 'Supana Churu']);

console.table(speed);

speed.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

console.log(speed.getAverageRating());

speed.addToMovieCast('Miri Niri');

console.log(speed.movieCast);

const analisis = new CD("Derek Rodriguez", "Análisis analizado", ['Radiografia', 'Laparotomia', 'Análisis', 'Traqueotomia']);

analisis.addRating(3);

analisis.addRating(2);

analisis.addRating(5);

console.table(analisis);

console.log(analisis.suffle());

const catalog = new Catalog();

catalog.addElementToCatalog(analisis);

console.log(catalog);

catalog.addElementToCatalog('melancolia');