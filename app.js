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
        this._ratings.push(rating);
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
    constructor(director , title, runTime){
        super(title);
        this._director  = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
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

const speed = new Book('Jan de Bont', 'Speed', 116);

console.table(speed);

speed.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

console.log(speed.getAverageRating());