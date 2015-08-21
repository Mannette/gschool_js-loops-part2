var students = [
  'joe',
  'carl',
  'rachel',
  'derek',
  'lily'
];
// logs each student
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// --------- //
// PROBLEM 1 //
// --------- //
// log each student except for lily
for (var i = 0; i < students.length-1; i++) {
  console.log(students[i]);
}

// --------- //
// PROBLEM 2 //
// --------- //
// log only joe rachel and lily
for (var i = 0; i < students.length; i++) {
  if (i % 2 === 0) {
    console.log(students[i]);
  }
}

// --------- //
// PROBLEM 3 //
// --------- //
// reverse logged array
for (var i = students.length-1; i >= 0; i--) {
  // students.reverse();
  console.log(students[i]);
}

// --------- //
// PROBLEM 4 //
// --------- //
for (var i = 0; i < students.length; i++) {
  
}
