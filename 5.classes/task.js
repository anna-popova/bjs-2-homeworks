//задача 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5; //!почему здесь не this._state *= 1.5; ??????????????????
	}

	set state(value) {
		this._state = value;

		if (value < 0) {
			return this._state = 0;
		}

		if (value > 100) {
			return this._state = 100;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = 'detective';
	}
}


//задача 2
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book._state > 30) {
			this.books.push(book);
		}
	}

	// findBookBy(type, value) {

	// 	for(let i = 0; i < this.books.length; i++) {
	// 		for(let key in this.books[i]) {
	// 			if(type === key && value === this.books[i][key]) {
	// 				return this.books[i];
	// 			}
	// 		}
	// 	}
	// }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"