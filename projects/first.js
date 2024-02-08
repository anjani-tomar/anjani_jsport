// function myFunction(p1, p2) {
//     return p1 * p2;
// }
// let result = myFunction(8, 4);
// document.getElementById("demo").innerHTML = result;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log("num = ", i);

//     }
// }
// let gameNum = 25;
// let userNum = prompt("guess the right number : ");
// while (userNum != gameNum) {
//     userNum = prompt("you entered wrong number. guess again : ");
// }
// console.log("congratulations, you entered right numbrr");

//strings

// let str = "apnaCollege";
// console.log(str[6]);
// let obj = {
//     item: "pen",
//     price: 20,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// let sentance = `this is a template`;
// console.log(typeof sentance)

// function toCelsius(f) {
//     return (5 / 9) * (f - 32);
// }

// let value = toCelsius(77);
// console.log(value + " celsius");

// let str = "         apnacollege   ";
//(1) for of loop     ,(2) for in loop
// let cities = ["dehli", "indore", "gwalior", "morena", "goa"];
// for (let city of cities) {
//     console.log(city);
// }
// console.log(cities);

/* que1. for a give array with marks of student -> [85, 97, 44, 37, 76 ,60] 
 find the average marks of the entire class.*/

// let marks = [85, 97, 37, 76, 44, 60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks o the class = ${avg}`);

/*que 2. */

// let items = [250, 650, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);

//................push method ->> to add the data at the end

// let foodItems = ["apple", "orange", "tomato", "potato"];
// foodItems.push("bnana", "orange")
// console.log(foodItems);

//...................pop method ->> delete the data at the end

// let foodItems = ["apple", "orange", "tomato", "potato"];
// let deletedItems = foodItems.pop()
// console.log(foodItems);
// console.log("deleted item = " + deletedItems);

//....................To strings

// let foodItems = ["apple", "orange", "tomato", "potato"];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

//....................shift ->> to delete data at the start

// let companies = ["infograins", "TCS", "yashTechno", "google", "microsoft", "Amazone"];
// companies.shift();
// console.log(companies);

//....................splice ->> if we want to add one or more item and delete

// let companies = ["infograins", "TCS", "yashTechno", "google", "microsoft", "Amazone"];
// companies.splice(2, 1, "Ola");
// console.log(companies);

//.......................unshift methode ->> add the data at the start

// let companies = ["infograins", "TCS", "yashTechno", "google", "microsoft", "Amazone"];
// companies.unshift("Ola");
// console.log(companies);

// .......................Array of objects

// let myObject = {
//     jhon: {
//         name: 'jhon',
//         age: 12,
//         gender: 'male'
//     },
//     rita: {
//         name: 'rita',
//         age: 32,
//         gender: 'male'
//     }
// };
// // Using DOT notation
// console.log('Using DOT:' + myObject.jhon.age);
// // Using [] notation
// console.log('Using []:' + myObject.rita['age']);
// // Using delete keyword
// delete myObject.rita;
// // Iterating using for..in loop
// for (let key in myObject) {
//     // logs values in myObject
//     console.log(myObject[key]);
// }

// ......AbortController.........

// let Arr = [1, 2, 3, 4, 5];
// // Iterating through loop
// for (let i = 0; i < Arr.length; i++) {
//     console.log(Arr[i]);
// }
// // Pop an element from array
// Arr.push('6');
// console.log("After using push() Method: " + Arr);

//......AbortController...

//return function
// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }
// let val = sum(3, 6);
// console.log(val);

//arrow functions ->>compect way of writing a function

// //sum fucntion
// function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => {
//     return a + b;
// };
// //multiplication functions
// function mul(a, b) {
//     return a * b;
// }
// const arrowMul = (a, b) => {
//     return a * b;
// };

//que. Create a functionusing the "function" keyword that takes a String as an 
//     argument & returns the of vowels in the string.

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u") {
//             count++;
//         }
//     }
//     return count;
//}

//create an arrow function to perform the same task 

// const countWovel = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

//forEach loop in array

// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//         if (selectObject.options[i].selected) {
//             numberSelected++;
//         }
//     }
//     return numberSelected;
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
// });

// doSomething()
//     .then(function(result) {
//         return doSomethingElse(result);
//     })
//     .then(function(newResult) {
//         return doThirdThing(newResult);
//     })
//     .then(function(finalResult) {
//         console.log(`Got the final result: ${finalResult}`);
//     })
//     .catch(failureCallback);

// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2

//data types of javascript


// var x = 'y';
// document.write(x);
// document.write("<br>");
// document.write(typeof x);






/* --**  COLOR PICKER LISTNER START **-- */

function myFunction() {
    var x = document.getElementById("settings_div");
    var element = document.getElementById("myDIV");

    if (x.style.display === "none") {
        x.style.display = "block";
        element.classList.remove("fa-cog");
        element.classList.remove("fa-spin");
        element.classList.add("fa-times");
    } else {
        x.style.display = "none";
        element.classList.remove("fa-times");
        element.classList.add("fa-cog");
        element.classList.add("fa-spin");
    }
}
let text_box_gradient_color_one = document.getElementById('text_box_gradient_color_one');
let text_box_gradient_color_two = document.getElementById('text_box_gradient_color_two');
let text_color_one = document.getElementById('text_color_one');

text_box_gradient_color_one.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--textgradientone', this.value);
    document.documentElement.style.setProperty('--textgradientfour', this.value);
});
text_box_gradient_color_two.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--textgradientthree', this.value);
    document.documentElement.style.setProperty('--textgradienttwo', this.value);
});
text_color_one.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--textcolor', this.value);
});
/* --**  COLOR PICKER LISTNER END **-- */

/* --**  TIMER START **-- */
var mymonth, mydays, myhour, myminute, mysecond;

function flipNumber(el, newnumber) {
    var thistop = el.find(".top").clone();
    var thisbottom = el.find(".bottom").clone();
    thistop.addClass("new");
    thisbottom.addClass("new");
    thisbottom.find(".text").text(newnumber);
    el.find(".top").after(thistop);
    el.find(".top.new").append(thisbottom);
    el.addClass("flipping");
    el.find(".top:not(.new)").find(".text").text(newnumber);
    setTimeout(function() {
        el.find(".bottom:not(.new)").find(".text").text(newnumber);
    }, 500);
}
var d = new Date();
var year = d.getFullYear() + 1;
var day = d.getDate();
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var month = months[d.getMonth()];
var minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes();
var hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours();
var second = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds();

const newDate = new Date('' + month + ' ' + day + ' ' + year + ' ' + hours + ':' + minutes + ':' + second + '').getTime()

var countdown = null;

function countDownStart(newDate) {
    countdown = setInterval(() => {

        $(".flipper").removeClass("flipping");
        $(".flipper .new").remove();

        const date = new Date().getTime()
        const diff = newDate - date

        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
        const dayss = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
        const hourss = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutess = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const secondss = Math.floor((diff % (1000 * 60)) / 1000)

        var seconds = secondss.toString();
        if (seconds.length == 1) {
            seconds = "0" + seconds;
        }
        var minutes = minutess.toString();
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
        var hour = hourss.toString();
        if (hour.length == 1) {
            hour = "0" + hour;
        }
        var days = dayss.toString();
        if (days.length == 1) {
            days = "0" + days;
        }
        var month = months.toString();
        if (month.length == 1) {
            month = "0" + month;
        }

        if ($(mymonth[0]).text() !== month) {
            flipNumber($(mymonth[0]).closest(".flipper"), month);
        }
        if ($(mydays[0]).text() !== days) {
            flipNumber($(mydays[0]).closest(".flipper"), days);
        }
        if ($(myhour[0]).text() !== hour) {
            flipNumber($(myhour[0]).closest(".flipper"), hour);
        }
        if ($(myminute[0]).text() !== minutes) {
            flipNumber($(myminute[0]).closest(".flipper"), minutes);
        }
        if ($(mysecond[0]).text() !== seconds) {
            flipNumber($(mysecond[0]).closest(".flipper"), seconds);
        }
        if (diff === 0) {
            clearInterval(countdown)
            document.querySelector(".countdown").innerHTML = 'Happy New Year'
        }

    }, 500)
}

function setTime() {
    $(".flipper").removeClass("flipping");
    $(".flipper .new").remove();

    const date = new Date().getTime()
    const diff = newDate - date

    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
    const dayss = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
    const hourss = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutess = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const secondss = Math.floor((diff % (1000 * 60)) / 1000)

    var seconds = secondss.toString();
    if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    var minutes = minutess.toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    var hour = hourss.toString();
    if (hour.length == 1) {
        hour = "0" + hour;
    }
    var days = dayss.toString();
    if (days.length == 1) {
        days = "0" + days;
    }
    var month = months.toString();
    if (month.length == 1) {
        month = "0" + month;
    }

    if ($(mymonth[0]).text() !== month) {
        flipNumber($(mymonth[0]).closest(".flipper"), month);
    }
    if ($(mydays[0]).text() !== days) {
        flipNumber($(mydays[0]).closest(".flipper"), days);
    }
    if ($(myhour[0]).text() !== hour) {
        flipNumber($(myhour[0]).closest(".flipper"), hour);
    }
    if ($(myminute[0]).text() !== minutes) {
        flipNumber($(myminute[0]).closest(".flipper"), minutes);
    }
    if ($(mysecond[0]).text() !== seconds) {
        flipNumber($(mysecond[0]).closest(".flipper"), seconds);
    }

    setTimeout(function() {
        setTime();
    }, 500);
}

$(function() {
    mymonth = $(".countdown .flipper:nth-child(1) div:not(.new) .text");
    mydays = $(".countdown .flipper:nth-child(2) div:not(.new) .text");
    myhour = $(".countdown .flipper:nth-child(3) div:not(.new) .text");
    myminute = $(".countdown .flipper:nth-child(4) div:not(.new) .text");
    mysecond = $(".countdown .flipper:nth-child(5) div:not(.new) .text");
    countDownStart(newDate);
});
/* --**  TIMER END **-- */



/* --**  CUSTOMIZE SATRT **-- */
const spacing = document.getElementById('spacing');
const source = document.getElementById('source');
const result = document.getElementById('heading');
const countdownstyle = document.getElementById('countdown');
const datetime = document.getElementById('date-time');

const inputHandler = function(e) {
    result.innerText = e.target.value || "Coming Soon";
}
const inputHandlerSpacing = function(e) {
    countdownstyle.style.setProperty('grid-column-gap', e.target.value + "px");
}
const inputHandlerDatetime = function(e) {
    const data = new Date(e.target.value).getTime();
    clearInterval(countdown)
    countDownStart(data);
}
source.addEventListener('input', inputHandler);
spacing.addEventListener('input', inputHandlerSpacing);
datetime.addEventListener('input', inputHandlerDatetime);
/* --**  CUSTOMIZE END **-- */

var imagecount = 2;

function changeImage() {
    var img = "./image/" + imagecount + ".jpg";
    if (imagecount == 11 || imagecount == 10) {
        img = "./image/" + imagecount + ".gif";
    }

    console.log(img)

    document.getElementById("background_image").src = img;
    if (imagecount == 11) {
        imagecount = 1;
    } else {
        imagecount = imagecount + 1;
    }
}

/* --**  COLOR PICKER LISTNER START **-- */

let gradient_color_one = document.getElementById('gradient_color_one');
let gradient_color_two = document.getElementById('gradient_color_two');
gradient_color_one.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--gradientone', this.value);
});

gradient_color_two.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--gradienttwo', this.value);
});

/* --**  COLOR PICKER LISTNER END **-- */