//Algos and problem solving patterns

//Algorithm is a process or set of steps t o accomplish a certain task
// almost everything in progreamming involves algos
//foundation for being a successful problem solving dev
//ALSO INTERVIEWS

//How do you improve??
//Understand the problem
//explore concrete example
//break it down
//solve//simplify
//look back and refactor


//Understand the problem
//have a gameplan
//George Polya "How To Solve It"
//Can I restate the problem IN MY OWN WORDS??
//What are the inputs that go into the problem
//What are the outputs that should come from the solution to the problem
//Can the outputs be determined from the inputs? In other words do I have enough information to solve the problem
//how should I label the important pieces of data that are a part oft his problem

//Write  function which takes two numbers and returns their sum

//Can I restate -- write a function that adds two numbers
//inputs -- ints? floats? strings for large num?
//outputs -- int? float? dting?
//can outputs be determined -- possibly but ask interviewer
//how to label -- add, num1, num2, sum

//Concrete Examples
//coming up with examples can help you understand prblem better
//examples also provide snaity checks that your eventual solution works how it should
// user stories!!
//"GIven an input what is our output"
//unit tests 

//start with simple examples
//progress to more complex examples
//explore examples with empty inputs
//explore examples with valid inputs

//Write a function which takes in a string and returns counts of each character in the string

charCount("aaaa"); //{a:4}
charcount("Hello"); //{H:1, e:1, L:2, o:1}
"My phone number is 182763" //should it return count for spaces? numbers?
"Hello hi" //"" do we account for capital letters as diff
charCount("") //what do we want to return? null?
charcount({mark: 3}) //wrong input? what should return

//Break it down
//Explicitly write out the steps you need to take
//forces you to think about the code you'll write before you write it and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (syntax) as well


function charCount(str){
    //make obj to return at end
    var result = {};
    //loop over string for each character
    for(var i =0; i < str.length; i++) {
        char = str[i].toLowerCase();
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
        
    }
    // if char is a number/letter and is a key in obj, add one to count
    //if char is not a number/letter and not in obj, add it and set value to 1
    //if char is something else (space period etc) do nothing
    //return obj at end

    return result

}

//Solve/Simplify
//if you can't solve the problem--solve a simpler one

//Look back and refactor
//Refactoring Qs
//Can you check the result
//Can you derive the result differently
//Can you understand it at a glance
//can you use the result or method for some other problem
//can you improve the performance of your solution
//can you think of other ways to refactor
//how have others solved this problem

// Interview Strategies
//Understand the Problem
    //ask Qs if you need to/calrify prob with interviewer
//Explore concrete examples
    //understanding how it should work
//Break it Down
    //pseudocode//make game plan
//Solve/Simplify
    //if you cannot solve the problem right away solve a simpler one then try to do the harder one as a plug in later
//look back and refactor
    //analyze code and see if it can have bette rruntime or written more simply or done better
    



