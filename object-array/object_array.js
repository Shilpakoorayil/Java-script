const students =[
    {name:'Shilpa', age :23, grade :'A'},
    {name: 'anjana', age: 34, grade :'A'}
]



//accessing data
console.log(students[0].name);
console.log(students[1].age);


//Looping through object array

students.forEach(studentList => {
    console.log(`${studentList.name} is ${studentList.age} years old`);
    
})

