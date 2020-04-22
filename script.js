//Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and a property saying whether it is bought or not. Write a few functions for working with this array: 
// 1) Function for displaying the entire list; 
// 2) Function for adding a purchase to the list. Note that if a product already exists in the array, the amount needs to be increased in the existing purchase, not in a new one;
//  3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.

let GroceriesList0 = {
    product: 'Avacado',
    price: 10,
    bought: false
};
console.log(GroceriesList0);

let GroceriesList1 = {
    product: 'Mango',
    price: 20,
    bought: true
}
console.log(GroceriesList1);

let GroceriesList2 = {
    product: 'Orange',
    price: 15,
    bought: false
}
console.log(GroceriesList2);

function product(product, price, bought) {
    this.product = product;
    this.price = price;
    this.bought = bought;

    this.displayFullList = function () {
        console.log(`${this.product} ${this.price} ${this.price} ${this.bought}`);
    }
}

let addingNewPurchase = []
for (let i = 0; i < 1; i++) {
    addingNewPurchase.push(new product('Banana', 15, true));
}
console.log(addingNewPurchase);

//Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it: 1) Display all the classrooms; 2) Display all the classrooms for a given faculty; 3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.

// function definitons here
function Classroom(name, seats, faculty) {
    this.name = name;
    this.seats = seats;
    this.faculty = faculty;

    this.display = function () {
        console.log(`${this.name} ${this.faculty}`);
    }
}

//1  Display all the classrooms;
function displayClassrooms(rooms) {
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].display();
    }
}

//2  Display all the classrooms for a given faculty
function displayClassroomFaculties(rooms, faculty) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].faculty === faculty) {
            rooms[i].display();
        }
    }
}

//Display only the classrooms that would fit a given group the number of students, and the faculty name.
function displayClassroomforaGroup(rooms, seats, faculty) {
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].seats == faculty) {
            rooms[i].display();
            console.log(`${this.seat}  ${this.faculty}`);
        }
    }
}
    //hi Marya i am kind of stuck here 

//main code here
let classrooms = [];
classrooms.push(new Classroom('A100', 18, 'Agriculture'));
classrooms.push(new Classroom('A101', 16, 'Maths'));
classrooms.push(new Classroom('A102', 10, 'Science'));
classrooms.push(new Classroom('B103', 18, 'Science'));
classrooms.push(new Classroom('C104', 16, 'Language'));
classrooms.push(new Classroom('D105', 10, 'Language'));
displayClassrooms(classrooms);
displayClassroomFaculties(classrooms, 'Maths');
displayClassroomforaGroup(classrooms, 16, 'Science');




