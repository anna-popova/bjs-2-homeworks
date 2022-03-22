function Student(name, gender, age) {
	this.name = name,
	this.gender = gender,
	this.age = age
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
	if (this.marks === undefined) { 
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function(...marks) {
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	let sum = 0
	for(let mark of this.marks) {
		sum +=  mark;
	}
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); //4.6666
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}