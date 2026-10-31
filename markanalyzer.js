// ASSIGNMENT 1: STUDENT MARKS ANALYZER

// Student details and subject MARKS
let studentName = "Neel Yuvan";
let rollno = 101;
let department = "Computer Science";
let marks = [78, 89, 71, 91, 69];

// Calculate total marks
function calculateTotal(marksArray) {
  let total = 0;

  for (let i = 0; i < marksArray.length; i++) {
    total += marksArray[i];
  }
  return total;
}

// CAlculate percentage
function calculatePercentage(marksArray) {
  let total = calculateTotal(marksArray);
  let maximumMarks = marksArray.length * 100;
   return (total / maximumMarks) * 100

}

// Find highgest marks
function findHighest(marksArray) {
  let highest = marksArray[0];

  for (let i = 1; i < marksArray.length; i++) {
    if (marksArray[i] > highest) {
      highest = marksArray[i];
    }
  }
  return highest;
}

// Find lowest marks
function findLowest(marksArray) {
  let lowest = marksArray[0];

  for (let i = 1; i < marksArray.length; i++) {
    if (marksArray[i] < lowest) {
      lowest = marksArray[i];
    }
  }
  return lowest;
}

// Count subjects with marks >=40
function countPassedSubjects(marksArray) {
  let count = 0;

  for (let i = 0; i < marksArray.length; i++) {
    if (marksArray[i] >= 40) {
      count++;
    }
  }
  return count;
}

// Print the student marks report
let total = calculateTotal(marks);
let percentage = calculatePercentage(marks);
let highest = findHighest(marks);
let lowest = findLowest(marks);
let passedSubjects = countPassedSubjects(marks);
let failedSubjects = marks.length - passedSubjects;

console.log("STUDENT MARKS REPORT");
console.log("--------------------");
console.log("Name:", studentName);
console.log("Roll number:", rollno);
console.log("Department:", department);
console.log("Marks", marks.join(", "));
console.log("Total marks:", total, "out of", marks.length * 100);
console.log("percentage:", percentage.toFixed(2) + "%");
console.log("Highest marks:", highest);
console.log("Lowest marks:", lowest);
console.log("Subject passed:", passedSubjects);
console.log("Subjects failed:", failedSubjects);
