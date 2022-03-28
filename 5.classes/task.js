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
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	//!не работает
	//нужен ли вообще цикл с for(let i = 0; i < this.books.length; i++) ??? И если не нужен, то как мне вернуть книгу??? return this.books - будет весь массив объектов возвращать, а не отдельную книгу.
	//проверку на название книги вроде сделала правильно item.name === value , а как сделать проверку на ключ (тип, автор, название, год выпуска и пр.) ??? На вебинаре преподаватель сказал, что надо использовать динамические свойства (т.е. указывать в квадратных скобках). Но как это технически реализовать, примера не было (((
	findBookBy(type, value) {
		for(let i = 0; i < this.books.length; i++) {
			if(this.books.find((item, index) => item.name === value && index === type)) {
				return this.books[i];
			} else {
				return null;
			}
		}
	}

	giveBookByName(bookName) {
		let index = this.books.findIndex(item => item.name === bookName);

		if (index !== -1) {
			let deletedObj = this.books.splice(index, 1);
			return deletedObj[0];
		} else {
			return null;
		}
	}
}


//задача 3
