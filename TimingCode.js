//Func returns sum of N
// Number os operations is (eventually) bounded by a multiple of n (say, 10n)
//O(n)
function addUpTo(n) {
    let total = 0;
    for (let i=0; i <= n; i++) {
        total += i;
    }
    return total
}
// Always 3 operations
// O(1)
function addUpToTwo(n) {
    return n * (n + 1) / 2;
}
//Func counts up n and then reverse counts n
//O(n)
function countUpAndDown(n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top! \nGoing down...");
    for (let j = n - 1; j >= 0; j-- ) {
        console.log(j)
    }
    console.log("Back down. Bye!")
}
//func returns all number(0 + 1, 0 +2, ...)
//O(n) inside of an O(n) operation
//O(n^2)
function printAllPairs(n) {
    for (var i = 0; i< n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
//func prints numbers up to n but at minimum prints 1-5
// O(n)
function logAtLeast5(n) {
    for (var i=1; i<=Math.max(5, n); i++) {
        console.log(i);
    }
}
//func prints numbers up to 5 but no more(only positive number)
// O(1)
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// console.log(printAllPairs(5))
// console.log(countUpAndDown(10))

// console.log(addUpTo(6))

// console.log(addUpToTwo(6))

//both get the same answer but which is better?
//Faster? Less memory intensive? Readablility? DRY?
//Faster and less memory more important, can come with loss of easy of readibility

//How to evaluate speed?

// let t1 = performance.now();
// addUpToTwo(10000000000);
// let t2 = performance.now();
// console.log(`time elapsed: ${(t2-t1) / 1000} seconds`)

//can see the addUpToTwo functions runs shorter, but this type of comparisons uses resources and is not most efficient.

//Time evaluations can differ machine to machine or even on the same machine. Also speed measurements may not even be precise enough


//instead of counting seconds/time we can count number of operations the computer performs


//Big O notation is a way to formalize fuzzy counting 
//allows us to talk in a formal way about how the runtime of an algo grows as the inputs grow
//only care about broad trends
//Big O Definition
// We say than an algorithm is O(f(n)) if the numple of simple operations the computer has to do is eventually less than a constant time f(n), as n increases
//f(n) could be linear (f(n) = n)
//f(n) could be quadratic (f(n) = n^2)
//f(n) could be constant (f(n) = 1)
//f(n) could be something entirely different

// rules of thumb for big O

//constant don't matter
// O(2n) just O(n)
//O(500) just O(1)
//O(13n^2) just O(n^2)

//smaller terms don't matter
//O(n + 10) === O(n)
//O(1000n + 50) === O(n)
//O(n^2 + 5n + 8) === O(n^2)

//Big O shorthands
//Analyzing complezity with big O can get complicated, but several rules of thumb can help, the rules won't always work but are a helpful starting point
//arithmetic operations are constant
//variable assignment is constant
//accessing elements in an array (by index) or Object(by key) is constant
//in a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

//Space Complexity
//how much additional memory do we need to allocate in order to run the code in the algorithm
//what about inputs
//auxillary space complexity refers to space required by algo only not including space taken up by inputs
//most primatives (bool, num, undefined, null) constant space
//Strings require O(n) space where n is the string length
//reference types are general O(n), where n is the length for arrays or the number of keys for objects

//sums all items in array
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}
// 2 variables only, does not matter size of array. 0(1) space


//doubles items in array into new array
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// 0(n) space because n numbers


//logarithms
//log is the inverse of exponentiation (base)
//log base 2 (8) = 3
//here log ==== log sub 2(base 2)
//amount of times you can devide by two before below 1
// O(log n) is great! want this
//certain searching algos have logarithmic time complexity
//efficient sorting algos involve logarithms
//recursion sometimes involves logarithmic space complexity

//to analyze performance of an algo we use Big O notation
//Big O notation can give us a high level understanding of the time or space complexity of an algo
//Big O notation does not care about precision, only about general trends(linear, quadratic, constant)
//time or space complexity (as measured by Big O) depends only on the algo, not the hardware used to run the algo
//Big O notation is everywhere



