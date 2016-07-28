(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
