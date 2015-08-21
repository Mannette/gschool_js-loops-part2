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
for (var i = 0; i < students.length - 1; i++) {
  console.log(students[i]);
}

// --------- //
// PROBLEM 2 //
// --------- //
// log only joe rachel and lily
for (i = 0; i < students.length; i++) {
  if (i % 2 === 0) {
    console.log(students[i]);
  }
}

// --------- //
// PROBLEM 3 //
// --------- //
// reverse logged array
for (i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

// --------- //
// PROBLEM 4 //
// --------- //
for (var x = 0; x < students.length; x++) {
  if ((x < students.length - 1) && (x > 0)) {
    for (var y = 0; y < 2; y++) {
      console.log(students[x]);
    }
  } else {
    console.log(students[x]);
  }
}
