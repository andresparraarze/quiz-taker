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
alert("you got " + score + "/" + questions.length);