// var person = {
//     name: 'Josh',
//     age: 21
// };

// function updatePerson (obj) {
//     // obj = {
//     //     name: 'Josh',
//     //     age: 24
//     // };
//     obj.age = 24;
// }

// updatePerson(person);
// console.log(person);

var grades = [58,72];

function updateGrades (grade) {
    //grade = [58,72,74];
    grade.push(74);
    debugger;
}

updateGrades(grades);
console.log(grades);