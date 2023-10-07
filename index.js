// Q1 Create an object representing a car with properties like "make," "model," and "year". Write a function to display all the properties of the car. 

const carModel={
        make:"Maruti",
        model:"Alto",
        year:"2001"
    };

    function displayProperty(car){
        for(let property in car){
            console.log(`${property}:${carModel[property]}`)
        }
    }
    displayProperty(carModel);
    

// Q2 Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

    let student={
        name:"Aakash",
        age:"30",
        grade:"A"
    };
    function updateGrade(newGrade){
        student.grade = newGrade;
    }
    updateGrade("B");
    console.log(student);

// Q3 Write a program that takes an object as input and returns the number of properties it has

    function propertyCount(obj){
        return Object.keys(obj).length;
    }
    const Count={a:1,b:2,c:3};
    console.log(propertyCount(Count))

// Q4 Develop a program that accepts an object and a property name, and checks if the object has the specified property

    function checkProperty(obj,propertyName){
        return obj.hasOwnProperty(propertyName)
    }
    const someObject = {name:'Vijay',age:"35"};
    console.log(checkProperty(someObject,"name"))
    console.log(checkProperty(someObject,"address"))


// Q5 Write a JavaScript program that calculates the area of a circle using the Math object's properties and methods

        const radius = 5;
        let area =Math.PI* Math.pow(radius,2);
        console.log(area);


// Q6 Create a function that takes a string as input and returns the string reversed using string manipulation techniques

    function reverseString(input){
        return input.split('').reverse().join("")
    }
    const newString = "Hello Friend"
    const reversesString = reverseString(newString)
    console.log(reversesString)
