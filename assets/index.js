// timer code

let timeSecond = 300;
const timeH = document.querySelector(".time-left");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
}

// questions draft 

var questions = [
{
    prompt: "What does html stand for?\n(a) Hyperlinks\n(b) Hypertext Markup Lnaguage\n(c) Hyper Tool language",
    answer: "b"
},
{
    prompt: "Whats the correct Html tag to make a numbered list?\n(a) <ul>\n(b) <ol>\n(c) <list>",
    answer: "b"
},
{
    prompt: "What is the correct Html tag for the largest heading?\n(a) <head>\n(b) <header>\n(c) <h1>",
    answer: "c"
},
{
    prompt: "What does css stand for?\n(a) Cascading Style Sheets\n(b) Computer Style Sheets\n(c) Creating Style Sheets",
    answer: "a"
},
{
    prompt: "Which property is used to change the background color?\n(a) bgcolor\n(b) color\n(c) background-color",
    answer: "c"
},
] ; 

var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("correct");
    } else {
        alert("wrong");
    };
};

// onclick
var button = document.getElementsByClassName("view-highscores-button");

button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
});

if 
alert("you got " + score + "/" + questions.length);