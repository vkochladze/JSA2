//1
console.log("////1////");

for (let i = 5; i <= 100; i++) {
  console.log(i);
}

//2
console.log("////2////");

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10) {
    console.log(i);
  }
}

//3
console.log("////3////");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    {
      console.log("არის");
      break;
    }
  }
}

//4
console.log("////4////");
let array3 = [1, 2, 3, 4, 5];
let array3Sum = 0;

for (let i = 0; i < array3.length; i++) {
  array3Sum += array3[i];
}
console.log(array3Sum);

//5
console.log("////5////");
let array4Sum = 0;

let array4 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array4.length; i++) {
  array4Sum += array4[i];
}

console.log(array4Sum / array4.length);

//6
console.log("////6////");

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
  // if (array5[i] != 7) {
  //   console.log(array5[i]);
  // }
  if (array5[i] == 7) {
    continue;
  } else {
    console.log(array5[i]);
  }
}

//7
console.log("////7////");

let user1 = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user1.studentstatus);

//8
console.log("////8////");
let user2 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello");
} else if (user2.name == "levani") {
  console.log("hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello world");
} else {
  console.log("error");
}

//9
console.log("////9////");
let array6 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < 4; i++) {
  if (array6[0][i] > 0) {
    console.log(array6[0][i]);
  }

  if (array6[1][i] > 0) {
    console.log(array6[1][i]);
  }

  if (array6[2][i] > 0) {
    console.log(array6[2][i]);
  }
}

//10
console.log("////10////");

let numbers = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

console.log("ლუწები");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

console.log("კენტები");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}

//11
console.log("////11////");
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

let keys = Object.keys(users);
let values = Object.values(users);
let entires = Object.entries(users);

for (let i = 0; i < users.length; i++) {
  if (users[i].status == true) {
    console.log(users[i]);
  }
}
