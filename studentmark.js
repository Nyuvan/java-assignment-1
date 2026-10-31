// ASSIGNMENT 1 : STUDENT MARKS ANALYZER 1
//1&2 Student details and subject marks stored in variable & array
let studentName = "Neel Yuvan";
let rollno = 101;
let department = "computer Science";
let marks = [78, 89, 65, 91, 39]; //marks in 5 subjects

// 3. function to calculate total marks
function calculateTotal(marksArray) {
  let total = 0;
  for (let i = 0; i < marksArray.length; i++){
    total += marksArray[i];
  }
  return total;
}

// 4. function to calculate percentage
function calculatePercentage(marksArray) {
  let total = calculateTotal(marksArray);
  return (total / (marksArray.length * 100)) * 100;
 }

 // 5. Function to find highest marks
function findHighest(marksArray) {
  let highest = marksArray[0];
  for (let i = 1; i < marksArray.length; i++){
    if (marksArray[i] > highest) {
      highest = marksArray[i];
    }
  }
  return highest;
}

// 6.Function to find lowest marks
function findLowest(marksArray) {
  let lowest = marksArray[0];
  for (let i = 1; i < marksArray.length; i++){
    if (marksArray[i] < lowest) {
      lowest = marksArray[i];
    }
  }
  return lowest;
}

// 7. Count sunjects with marks >=40(passed)
function countPassedSubjects(marksArray){
  let count = 0;
  for (let i = 0; i < marksArray.length; i++){
    if (marksArray[i] >= 40) {
      count++;
    }
    return count;
  }
}
console.log("Javascript is running successfully!");
