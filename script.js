alert("welcome to tara's website");
//Artimetic Operators
let a= 5;
let b= 2;

a += 5;
b -= 2;
console.log("a= ", a , "&b= ", b );

let c= 10;
let d= 100;

c *=10;
d *=10;
console.log("c= ", c , "&d= ", d);




//Comparison Operators


let r=33;
let t=50;
console.log("r == t",r == t);
console.log("r != t",r != t);
console.log("r===t",r === t); 
console.log("r !== t",r !== t); //not equal to & type
console.log("r > t=", r > t);
console.log("r < t=", r < t);
console.log("r <=t", r <= t);
console.log("r >=t", r >= t);

//logical operators



let x=3;
let y=4;

let cond1 = x < y;
let cond2 = x === 3;
let cond3 = x > y;
let cond4 = x != y;
let cond5 = x === 4;


//and && operator


console.log("cond1 && cond2=", cond1 && cond2 );
console.log("cond3 && cond4=", cond3 && cond4 );
console.log("cond2 && cond4=", cond2 && cond4 );



// or'||' operator



console.log("cond2 || cond1=", cond2 || cond1); //condition '2' is true but another condition is false.If 1 cond is true and another is false then it shows the result true. 
console .log("cond3 || cond5", cond3 || cond5 );


// logical not '!'.it can change true result into false & false result into true.



console.log("!(x < y=)", !(x < y) ); // logical not change true result into false result
console.log("!(x === 456 =)", !(x === 456) ); // here it change false result into true result

// Conditional statement



let age = 16;

if(age >= 18) {
    console.log(" you can vote");

}
if(age <  18) {
    console.log("Sorry!, you can't vote");
}

let total  = 75

if(total  >= 35) {
    console.log("Congrats!,You have pass your exam");
}
if(total  < 35) {
    console.log("OOH! no your are fail");
}

//let mode = "dark";
//let color;

//if(mode === "dark") {
    //color="blue dark";
//}
//if(mode === "black") {
  //  color="light black";
//}
//console.log(color);

let mode = "red";
let color;

if(mode === "green") {
    color="light green";
}
else {
    color="please choose another color";
}
console.log(color);


// This step is much eaiser and professional than upper one.


let num = 575;

if (num %2 === 0) {
console.log( num, "number is even");
}
else {
console.log(num ," is odd");
}

//else-if condition 


let marks = 73;

if (marks === 35 ) {
    console.log(marks, "is satisfy number");
}
else if ( marks > 35 ) {
    console.log(marks , "is good number");
}
else {
    console.log(marks,"is poor number");
}


//TERNARY OPERATORS

// A?B:C 

//HERE, 'a' find the condition is true or false.if it is true then it print 'b'otherwise the condition is false it print 'c'



let number= 75
let result=number > 50 ? "pass ": fail ;
console.log(result);


//constant varible 

const fullname = {
    name:"saugat regmi",
    years : 11,
    height: 4.3,
    mothername:"LAXMI REGMI",
    fathername:"mohan lal regmi",
    address:"maurahtadi",
};
console.log("Thank you");
//
let reslt =age > 18 ? "adult":"not adult";//simplest form of if else
console.log(reslt);
// PROJECT
{
    let me="";
    let inf= prompt("Enter your name ");
    while(inf === me) {
    inf = prompt("!Enter your name");
    }
    
    alert("welcome to percentage conveter",inf);
    
    let scr=prompt("Enter your percentage %");
    while(scr === "") {
        scr=prompt("Enter your percentage %");
    }
    if(scr>=90 && scr<=100) {
        console.log(inf,"Congratulation! you have score A+ ");
    }
    else if(scr >=80 && scr <=89) {
        console.log(inf,"Congratulation! you have score A");
    }
    else if(scr >=70 && scr <= 79) {
        console.log(inf,"Congratulation! you have score B+");
    }
    else if(scr >= 60 && scr <= 69) {
        console.log(inf,"Congratulation! you have score B+");
    }
    else if(scr >= 50 && scr <= 59) {
        console.log(inf,"Congratulation! you have score c+");
    }
    else if(scr >= 0 && scr <= 49) {
        console.log(inf,"OOPS! you got N.G ");
    }
    }
    // LOOP & STRING
     
{sum = 0;
for(let i=1;i<=2;i++){
sum=sum + i;
console.log("sum=",sum);
}
}
//
 no=1
for(let i=1;i<=10;i++) {
tb=no * i;
console.log(no * i );
}
// For of loop

let infor={
    name :" roshan",
    clls :11,
    ag :17,
    ispass:true,
};
for(let i in infor) {
    console.log("i=",i,"value=",infor[i]);
}
//First simple game
let rod =25
let doThis = prompt("guess number:");

while( doThis != rod ) {
    doThis = prompt("guess again!:");
}
alert("congratulation!");
//String 
let str="Roshan";

str.length

console.log(str[3]);
let str2='roshan';
for(let i=1;i<=str.length;i++) {
    console.log(str2);
}

//Template litrals
let obj = {
    name:"roshan bhattarai",
    age:17,
    address: "dhurbatol",
};
let output=`${obj.name} is ${obj.age}years old who have been living in ${obj.address} from ${obj.age} years`;
console.log(output);

let tot_sum=`the total rupee is ${4+5+8}`;
console.log(tot_sum);
//escape character
// \t,\n.
let nam = "roshan\nbhattarai";// \n and \t are count as a 1 string in this case
console.log(nam.length);



//  string method are:
{
    //  str.toUpperCase()
    //str.toLowerCase()
    //str.trim() // remover whitespaces
    //str1.concat(str2)[concat means add]
    // str.replace("select word to replace","put the word what you want")
    //str.charAt(no. of string)
};
// :NOTE=strings are immutable in javascript

let foa="              rOSHAn bHATTaRai            ";
console.log(foa.toUpperCase());

console.log(foa.toLowerCase());

console.log(foa.trim());


foa= foa.trim();

console.log(foa.slice(4,12));// slice pick the required word from string/

let foa2="roshan";
let foa3="bhattarai";

console.log(foa2.concat(foa3));
  
foa4=foa2.replace("roshan","tara");
console.log(foa2,"has replace and become ",foa4);


console.log(foa2.charAt(1));



///practice  

{let user=prompt("Enter your fullname");

while (user === "") {
    user=prompt("Enter your fullname");
};
let clr=user.trim();
let ad="@";
let totl=ad.concat(clr);

let len= clr.length;
console.log(totl.concat(len));
};

//Array
let arr=[23,323,25,554,3,2];
arr[0]=2; 
console.log(arr);// In this array case we can changes the original value without creating new variable
// array are mutable in javascript

//loops in array
for (let indx=0;indx<arr.length;indx++) {
    console.log(arr[indx]);
}
//for of loop
let cities=["Butwal","Pokhara","Kathmandu","chitwan"];
for(let city of cities) {
    console.log(city)
}
//test

let Student=[85,97,44,37,76,60];
let Avg=0;
for(let i of Student) {
     Avg=(Avg+i)

}
let rge=Avg/Student.length;
console.log(`the average of total array is ${rge}`);

// test
let itm =[250,655,300,900,50];
for(let i of itm) {
    let off= (10*i)/100;
    console.log("Price after applying 10% off is",i-off);
};
// ARRAY METHODS IN JS Concat( ) : joins multiple arrays & returns result


// push( ) : add to end

// pop( ) : delete from end & return

//toString( ) : converts array to string

//concat( ) : joins multiple arrays & returns result

//unshift( ) : add to start

//shift( ) : delete from start & return

//slice( ) : returns a piece of the array

// slice( startIdx, endIdx )

// splice( ) : change original array (add, remove, replace)

// splice( startIdx, delCount, newEl1... )







let food=["mango","papaya","guava","orange"];
food.push("burger","pizza","ice-cream");
food.pop();  
console.log(food);
console.log(food.toString()); 
console.log(food);

let hero=["thor","thanos","iron"];
//*

let op=food.concat(hero);//concat cannot change in original array
console.log(op);
//*
hero.unshift("antman");//it can change on original array
console.log(hero);
//*

hero.shift();
console.log(hero);//it can change on original array


//*
console.log(hero.slice(1,3 ));// it cannot change in original array.

//*
let arr_no=[1,2,3,4,5,6,7,8];
arr_no.splice(2,3,33,44,55); //it can change on original array
console.log(arr_no);

// to delete 

arr_no.splice(2,3);
console.log(arr_no);

//to replace

arr_no.splice(1,1,9);
console.log(arr_no);

// to add

arr_no.splice(1,0,0);
console.log(arr_no);

arr_no.splice(4);


//Qs. Create an array to store companies ->“Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”

//         a. Remove the first company from the array

//         b. Remove Uber & Add Ola in its place

//         c. Add Amazon at the end


// a //
let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Nextflix"];
comp.shift();
console.log("the first company is remove and become",comp);

// b //
 comp.splice(2,1,"ola");
 console.log(comp);

 // c // 
 comp.push("Amazon");
 console.log(comp);




 //FUNCTION IN JAVA SCRIPT 

 //*  function defination 
 //  function functionName() {
//
 //    do some work
 //  }


 //* FUNCTION CALL
 
 // functionName();
 

    // function functionName( param1, param2 ...) {
    
    // do some work }


function myFunction() {

    console.log("I am learning js now");
     // ^^ This is parameter ^^//
}

myFunction();  //  ** call to function **
myFunction();  //  ** call to function **
myFunction();  //  ** call to function **
myFunction();  //  ** call to function **


//
function myfun(mm) {
    //         ^^  this is variable**
    console.log(mm);
}
myfun("hello my name is roshan bhattarai"); // argument

// ** NOTE ==> Function parameter are like local parameter having block scope

function sUm( v , g ) {
    s= v+g;
    console.log("BEFORE RETURN");
    return s;
    console.log("AFTER RETURN");
};
let valeu= sUm(6,2);
console.log(valeu);

// Arrow Functions ( Compact way of writing a function )

//   */  const functionName = ( param1, param2 ...) => {

//        do some work
//                     }
  const arrowfun=(a,d) => {
    return a*d;
  }
  // ** pratice ** //
  // vowel counter //
  function countvowels(strs) {
    let c=0;
    for(const char of strs) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            c++;
        }
    }
   return c;
  }

  // according to arrow function
 
  const countv=(strs) => {
    let c=0;
    for(const char of strs) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            c++;
        }
    }
   return c;
}

  // forEach Loop in Arrays

//   arr.forEach( callBackFunction )
//   CallbackFunction : Here, it is a function to execute for each element in the array

//  A callback is a function passed as an argument to another function.


//   arr.forEach( ( val ) => {

//    console.log(val); 
//    } )

// ** Let‘s Practice ** //

// **Qs. For a given array of numbers, print the square of each value using the forEach loop.
let Arr = [1,4,56,7,89,6,4,234,7,89,];
Arr.forEach( ( val ) => {
    console.log("the square of each",val*val);

}
)


//    Some More Array Methods

//    Creates a new array with the results of some operation. The value its callback returns are
//    used to form new array
//    
//    arr.map( callbackFnx( value, index, array ) )

//    let newArr = arr.map( ( val ) => {

//    
//    return val * 2;
//        } )

// some example
let nns=[3,5,6,7,8,4,9,10];
let newnn = nns.map((nn) =>{
    return nn ** 2;
})


//    **FILTER METHOD**
//    Creates a new array of elements that give true for a condition/filter.
//    Eg: all even elements   
//    let newArr = arr.filter( ( ( val ) => {
//    
//    return val % 2 === 0;} )

let nat_num=[1,2,3,4,5,6,7,8,9,10];

let odd_arr= nat_num.filter( (nu) => {
    return nu % 2 !== 0;
} )
console.log(odd_arr);


// ** Reduce **  //
//Performs some operations & reduces the array to a single value. It returnsthat single value.

let yarra=[8,7,5,9,3,56];

const newyarr = yarra.reduce((prev,cur) => {
    return prev>cur?prev:cur;
})
console.log(newyarr); 


//   Let‘s Practice

//   Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.


let m=[87,9,86,98,90,77,99,96,89.5,14];

const newm=m.filter((va) =>{
    return va>=90;
})
console.log(newm);

//    Use the reduce method to calculate product of all numbers in the array.

let o=[1,2,3];
const newo=o.reduce((pre,cur) =>{
    return pre * cur;
})
console.log("product of all array is=",newo);

//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.

let n=prompt("enter number");
let h=[];
for(let i=1;i<=n;i++) {
    h[i-1] =i;
}
console.log(h);

//Use the reduce method to calculate sum of all numbers in the array.

let mu = [9,8,7,6,5,4,3,2,1];
const newmu=mu.reduce((pre,cur) =>{
    return pre+cur;
})
console.log("the sum of all array is",newmu);



//   ** DOM **    //

//DOM Manipulation

//Selecting with id
//document.getElementById(“myId”)

//Selecting with class
//document.getElementsByClassName(“myClass”)

//Selecting with tag
//document.getElementsByTagName(“p”)

//  **Query Selector** //

// document.querySelector(“#myId / .myClass / tag”)
// returns first element
 
 
// document.querySelectorAll(“#myId / .myClass / tag”)
// returns a NodeList


// according to their id name

let roshan=document.getElementById("heading");
console.dir(roshan);// dir return object
console.log(roshan);

// according to their class name
let clas=document.getElementsByClassName("head");
console.log(clas);
console.dir(clas);

//according to their tag name
let tg = document.getElementsByTagName("p");
console.dir(tg);
console.log(tg);

// query selector  //

// for first element
let ele= document.querySelector("h");
console.dir(ele);

// for nodelist or all element
let elem=document.querySelectorAll("h");
console.dir(elem);

// also we can search particular element which we want//

// for class we have to use . on first
let want=document.querySelector(".head");
console.dir(want);

//for id we have to use # on first
let wnt=document.querySelector("#heading");
console.dir(wnt);

// also we can access on the direct text

console.dir(wnt.innerText);

// also we can access on the direct html tags
console.dir(wnt.innerHTML);

// properties //

//tagName : returns tag for element nodes

//innerText : returns the text content of the element and all its children

//innerHTML : returns the plain text or HTML contents in the element

//textContent : returns textual content even for hidden elements



// we can also changed text and html tags as well;

let heding=document.querySelector("h1");
console.dir(heding.innerText);
heding.innerText=("bye");
heding.innerHTML=("<i>bye</i>");
console.dir(heding.innerText);
console.dir(heding.innerHTML);

//Let‘s Practice

//Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

let lo=document.querySelector("h2");
lo.innerText=lo.innerText+" from bhutaha";

console.dir(lo.innerText);






//Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.
let divs=document.querySelectorAll(".box");
let i=1;
for(div of divs) {
    div.innerText= div.innerText +"bye"+i;
    i++;

}

//   **Attributes**

// getAttribute( attr ) //to get the attribute value

// setAttribute( attr, value ) //to set the attribute value

//** example **/

let attr=document.querySelector("div");
console.log(attr.getAttribute("class"));

let para=document.querySelector("p")
console.log(para.setAttribute("class","new class"));




//  **Style**

// node.style

// **example**//
let sty=document.querySelector("div");
console.log(sty.style.backgroundColor="red");


//  **Insert Elements**


//  let el = document.createElement(“div“)
//  node.append( el ) //adds at the end of node (inside)
//  node.prepend( el ) //adds at the start of node (inside)
//  node.before( el ) //adds before the node (outside)
//  node.after( el ) //adds after the node (outside)

// Example //

let el = document.createElement("button");
el.innerText="Refresh!";

let dv=document.querySelector("div");
dv.append(el);

//

let bo=document.createElement("button");
bo.innerText="hi !";

let u=document.querySelector("div");
u.prepend(bo);

//
let z=document.createElement("button");
z.innerText="hi i am on top !";

let p=document.querySelector("div");
p.before(z);

//
let f=document.createElement("li")
f.innerText="hi now I am in last now";

let ob=document.querySelector("div");
ob.after(f);

 //  ** Delete Element ** //

//   node.remove( ) //removes the node

let del=document.querySelector("div");
del.remove();



// **Let‘s Practice **

 // Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.
 // Insert the button as the first element inside the body tag.

 let uy=document.createElement("button");
 uy.innerText="Click me!";
 uy.style.color="white";
uy.style.background="red";

 let ov=document.querySelector("body");
 ov.prepend(uy);
 


//  Qs. Create a <p> tag in html, give it a class & some styling.
//  Now create a new class in CSS and try to append this class to the <p> element.

//  Solve this problem using classList.
//  Did you notice, how you overwrite the class name when you add a new one?


//  attribute
//setAttribute(name, value)

// classname.classlist
// tags name.classlist.add("class")  to add class
// tags name.classlist.remove("another class")  to remove class

let gop=document.querySelector("p");

gop.setAttribute("class","new");

gop.classList.add("papp");



// **Events in JS**

// The change in the state of an object is known as an Event 

// Events are fired to notify code of "interesting changes" that may affect code execution.

// ** Mouse events (click, double click etc.) **

// ** Keyboard events (keypress, keyup, keydown) ** 

// ** Form events (submit etc.) ** 

// ** Print event & many more **



//  ** Event Handling in JS**

// node.event = ( ) => {
    //handle here
  //  }

     // **example**

    // btn.onclick = ( ) => {
   //  console.log(“btn was clicked”);
    // }

    
   let hut=document.querySelector("button");
   let dis=document.querySelector(".display");
   hut.onclick=() =>{
    dis.innerText=hut.innerText;

   }
  


    //  **Event Object**

// It is a special object that has details about the event.

// All event handlers have access to the Event Object's properties and methods.

//   node.event = (e) => {
//   handle here
//            }

//e.target, e.type, e.clientX, e.clientY

//** Event Listeners **/

// node.addEventListener( event, callback )

// node.removeEventListener( event, callback )

// *Note : the callback reference should be same to remove






// Prototypes in JS


// A javaScript object is an entity having state and behavior (properties and method).

// JS objects have a special property called prototype.

// We can set prototype using _ _ proto _ _ 

// *If object & prototype have same method, object’s method will be used.

const classe= {
    name :  "tara bhattarai",
    post : "none ",
    age : 18,
    marks : 90 ,
    printMarks : function(){
        console.log('marks =',this.marks);// here 'this.' means the object name .
    },
};


const emplo={
    calctax() {
        console.log("The tax rate is 40%");
    },
};

const dondai={
    salary :70000,
};

const dondai1={
    salary :3000,
}
dondai.__proto__=emplo;
dondai1.__proto__=emplo;


//Classes in JS


//Class is a program-code template for creating objects.

//Those objects will have some state (variables) & some behaviour (functions) inside it.


//     class MyClass {

//         constructor( ) { ... }

//        myMethod( ) { ... }

//       }

//  let myObj = new MyClass( ) ;
// Classes in JS

// Constructor( ) method is :

// automatically invoked by new

// initializes object



// class MyClass {

// constructor( ) { ... }

// myMethod( ) { ... }

//      }


class supra{
    constructor(brand,mileage){
       console.log("creating new object");
       this.brandname=brand;
       this.mileage=mileage;
    }
      start(){
         console.log("start");
      }
      stop(){
         console.log("stop");
      }
    
 }
  
 
 let newcar = new supra("toyota",40);
 console.log(newcar);
 let tata = new supra("tata",60);
 console.log(tata);
 
 
 
 
 




