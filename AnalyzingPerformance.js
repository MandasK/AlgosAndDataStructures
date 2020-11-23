//Understand how obj/arrays work through the lens of Big Object
//Explain why adding elements to the beginning of an array is costly
//compare and contrast the runtime for arrays and objects as well as built in methods

//Big O of Objects
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

//when to use objects
//dont' need order
//fast access/ insertion or removal

//insertion O(1)
//Removal O(1)
//Searching O(n)
//Access O(1)
//when you do not need orderign Objects are ideal

//Object Methods
//Object.keys Object(n)
//object.values O(n)
//object.entries O(n)
//hasOwnProperty(bool) O(1)

//Big O of Arrays
//ordered Lists
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
//indexed
//use when need order
//use when you need fast access/insertion/removal (sort of...)
//Searching O(n)
//Access O(1)
//Insertion
//each element has an index if you add at end(.push) O(1)
//if insert at beginning changes all index and has to reindex whole array 0(n)
//Removal
//reindexes depending on where removal happens
//.push/.pop always faster that .shift/.unshift

//Big O of Array methods
//push O(1)
//pop O(1)
//shift O(n)
//unshift O(n)
//concat O(n)
//slice O(n)
//splice O(n)
//sort O(n * log n)
//forEach/Map/filter/reduce/etc O(n)
