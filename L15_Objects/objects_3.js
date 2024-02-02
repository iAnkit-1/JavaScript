 // destructuring objects

 const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "Ankit"
}     

console.log( course.courseInstructor);
// or
const {courseInstructor} = course;
console.log(courseInstructor);

// or
const {courseInstructor : instructor} = course;
console.log(instructor);

const navbar = () =>{

}
navbar(company = "ankit")












