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

	// findBookBy(type, value) {
	// 	for(let i = 0; i < this.books.length; i++) {
	// 		if (this.books[i][type] === value) {
	// 			return this.books[i];
	// 		}
	// 	}
	// 	return null;
	// }

	findBookBy(type, value) {
		let result = this.books.find(item => value === item[type]);
		if (result) {
			return result;
		} else {
			return null;
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


//задание 3
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if( !(subject in this.marks) ) {
			this.marks[subject] = [];
		}

		if(mark <= 5) {
			this.marks[subject].push(mark);
		} else {
			return `Ошибка, оценка должна быть числом от 1 до 5`;
		}
	}
	
	getAverageBySubject(subject) {
		for(let key in this.marks) {
			if(key === subject) {
				return (this.marks[subject].reduce( (sum, current) => sum + current, 0 )) / this.marks[subject].length;
			}
		}
		return `Несуществующий предмет`;
	}

	getAverage() {
		let sum = 0;
		let lengthsSum = 0;
			for(let key in this.marks) {
				sum += this.marks[key].reduce( (sum, current) => sum + current, 0 )
				lengthsSum += this.marks[key].length;
			}
		return sum / lengthsSum;
	}

	exclude(string) {
		if(string === "Исключен за попытку подделать оценки") {
			for (let student in this) delete this[student];
		}
	}
}