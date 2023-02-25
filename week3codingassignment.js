// 1. create an array that contains the following values: 3,9,23,64,2,8,28,93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// subtract value of the first element in array from the last element of the array. Find last element progammatically.

console.log("subtract value of first element from value of last element in array ages:",  ages[ages.length-1] - ages[0]);

// add new age to the array and repeat step above to ensure it is dynamic

ages.push(53); 
console.log("repeating subtraction of first element from value of last element in ages array:", ages[ages.length-1] - ages[0]);

//use a loop to iterate the array and calculate the average age.
// average is the sum of array elements / by total number of elements.
let sum = 0

for (i = 0; i < ages.length; i++){
    sum = sum + ages[i];
}
let averageAge = (sum/ages.length);
console.log("The average age of the array ages:", averageAge);


// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters per name. 
let total = 0

for (i = 0; i < names.length; i++){
    total = total + names[i].length;
}
let avg = (total / names.length);
console.log("average number of letters per name:", avg);
//Use a loop to iterate through the array again and concatenate (chain/link together) all the names together, separated by spaces.
let combin = names[0];

for (let i = 0; i < names.length; i++){
    combin = combin.concat("", names[i]);
}
console.log(("names concatenated together:", combin));
//console.log(names);

// 3. How do you access the last element of any array?
// by printing console.log followed by the name of the array, [] with the number being the total number of elements minus 1.
console.log(names[5]);

// 4. How do you access the first element of any array?
// by printing console.log followed by the name of the array, [] with the number 0 since all arrays are zero based index.
console.log(names[0]);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

//6. write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

for (let i = 0; i < names.length; i++){
    nameLengths[i] = names.length;
}
sum = 0;

for (i=0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log("sum of all elements of array nameLengths", sum);

//7. write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatenate(word, n){
let x = word;
// i = 2, seems to be the only way for the word to print the designated number of times.
    for (i = 2; i <= n; i++){
        x = x.concat(word);
    }
    return x;
}
console.log("Concatenated word:", concatenate("Hello", 3));

//8. write a function that takes two parameters, firstName and lastName, and returns a fullname. (the full name should be first and the last name seperated by a space).

function fullName(firstName, lastName){
    return firstName.concat(" ", lastName);
}
console.log("Full Name:", fullName("Derek", "Jamerson"));

//9. write a function that takes an array of numbers and returns true if the sum of all numbers in the array is greater than 100.
//let array = [1, 2, 3, 4, 5];
let array = [50, 60, 70, 80, 90];
function sumGreaterThan100(array){
    sum = 0
    for (i = 0; i < array.length; i++){
        sum = sum + array[i];
    } if (sum > 100){
        return true;
    } else {
        return false;
    }
} 
console.log("Sum of all numbers > 100:", sumGreaterThan100(array));

//10. write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAverage(array){
    sum = 0
    for (i = 0; i < array.length; i++){
        sum = sum + array[i]; 
    } return (sum / array.length);
}
console.log("Average of numbers in array:", arrayAverage(array));

//11. write a function that takes two arrays of numbers an returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array2 = [20, 40, 60, 80, 100];
//let array2 = [200, 400, 600, 800, 1000];

function array2avg(array2){
    sum = 0
    for(i = 0; i < array2.length; i++){
        sum = sum + array2[i];
    } return (sum / array2.length);
}
function greaterThanAverage(array, array2){
    if ((arrayAverage(array)) > (array2avg(array2))){
        return true;
    }else{
        return false;
    }
}
console.log("Is the average of the first array > the second array?:", greaterThanAverage(array, array2));
//12. write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is > 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside) && (moneyInPocket > 10.50)){
        return true;
    }else{
        return false;
    }
}
let isHotOutside = true;
let moneyInPocket = 15;
console.log("Can Buy Drink:", willBuyDrink(isHotOutside, moneyInPocket));

//13. create a function of you own that solves a problem. In comments write what the function does and why you created it.

// create an array of numbers named brdft and use a function to calculate the sum of the array.
// I wanted to know the sum of the array brdft so I used the array.reduce function to add all of the elements of the array together.
let brdft = [23, 32, 46, 57, 98, 69];
let sumOfbrdft = brdft.reduce(function (a, b){
    return a + b
})
console.log(sumOfbrdft);

//write a function called lumberForProject using the brdft array for the parameter. Determine if there is enough board feet (brdft) available to build your project.
// This function takes the board feet amount needed for a project and compares it to the amount of material you have on hand. 
// Depending on the amount of material that you have, a boolean value is given to inform whether you have enough material for that project.
let brdftAmount = (250);
function lumberForProject(brdft){
    if (brdftAmount < sumOfbrdft){
        return true;
    } else{
        return false;
    }
}
console.log("We have enough material to build this project", lumberForProject(brdft));

// I created this function as it pertains to a hobby of mine in which I am trying to help apply coding to something else I love to further help in my understanding of what I am learning.