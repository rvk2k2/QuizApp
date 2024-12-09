const questions = [
    {
       question : "which is the largest animal in the world",
       answer:[
        {  text: "shark", correct: "false"},
        {  text: "Blue Whale", correct: "true"},
        {  text: "Elephant", correct: "false"},
        {  text: "Giraffe", correct: "false"},
       ]

    },
    {
        question : "which is the largest continent in the world",
        answer:[
         {  text: "Europe", correct: "false"},
         {  text: "Africa", correct: "false"},
         {  text: "Australia", correct: "false"},
         {  text: "Asia", correct: "true"},
        ]
 
     },
     {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: "false" },
            { text: "Jupiter", correct: "false" },
            { text: "Mars", correct: "true" },
            { text: "Saturn", correct: "false" }
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        answer: [
            { text: "Python", correct: "false" },
            { text: "HTML", correct: "true" },
            { text: "Java", correct: "false" },
            { text: "C++", correct: "false" }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answer: [
            { text: "Seoul", correct: "false" },
            { text: "Tokyo", correct: "true" },
            { text: "Beijing", correct: "false" },
            { text: "Bangkok", correct: "false" }
        ]
    },
    {
        question: "Who invented the telephone?",
        answer: [
            { text: "Thomas Edison", correct: "false" },
            { text: "Alexander Graham Bell", correct: "true" },
            { text: "Nikola Tesla", correct: "false" },
            { text: "Isaac Newton", correct: "false" }
        ]
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        answer: [
            { text: "Tiger", correct: "false" },
            { text: "Lion", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Leopard", correct: "false" }
        ]
    }
    
    
    
    
    

];

const questionele = document.getElementById("questions");
const answerbtn = document.getElementById("answer-button");
const nextbtn = document.getElementById("next-btn");

let currentquestionindex = 0 ;
let score = 0;

const startquiz = () => {
    currentquestionindex = 0;
    score = 0 ;
    nextbtn.innerHTML = "NEXT";
    showQuestion();

}
const showQuestion = () =>{
    resetState();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionele.innerHTML = questionno + "."+ currentquestion.question;

   currentquestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");//btn will be named as the class name for this button  
    answerbtn.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }


    button.addEventListener("click",SelectAnswer);
   });
}

const resetState =() =>{
 nextbtn.style.display ="none";
 while(answerbtn.firstChild){
    answerbtn.removeChild(answerbtn.firstChild);
 }

}


const SelectAnswer = (e) => {
     const Selectedbtn = e.target;
     const isCorrect = Selectedbtn.dataset.correct === "true";
     if(isCorrect){
        Selectedbtn.classList.add("correct");
        score++;
     }else{
        Selectedbtn.classList.add("incorrect");
     }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; 
    });
    nextbtn.style.display = "block";

}

const showscore =  () => {
    resetState();
    questionele.innerHTML = `you scored ${score} out of ${questions.length}`
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}


const handleNextButton = () => {
        currentquestionindex++;
        if(currentquestionindex < questions.length){
            showQuestion();
        }else{
            showscore();
        }
}

nextbtn.addEventListener("click",() => {
    if(currentquestionindex < questions.length)
       { handleNextButton();
       }
       else {
        startquiz();
       }
    
})

startquiz();




