// 1 & 2
class Task {

	constructor(owner, description, isCompleted = false, date = new Date()){
		this.owner = owner;
		this.description = description;
		this.isCompleted = isCompleted;
		this.date = date;
	}


	toggleCompleted() {
		this.isCompleted = !this.isCompleted;
	}

}


// 3
class Student {

	constructor(firstName, lastName, id) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.id = id;
	}

}


// 4
class Assignment {

	constructor(studentID, url, atype, grade) {
		this.studentID = studentID;
		this.url = url;
		this.atype = atype;
		this.grade = grade;
	}

}


// 5, 6, 7
class Gradebook {
	constructor(courseCode, courseID, instructorName, assignments = []){
		this.courseCode = courseCode;
		this.courseID = courseID;
		this.instructorName = instructorName;
		this.assignments = assignments;
	}

	addAssignment(newAssignment) {
		this.assignments.push(newAssignment);
	}

	getAverage() {
		return this.assignments.reduce( (a, b) => a + b, 0 ) / this.assignments.length;
	}
}
