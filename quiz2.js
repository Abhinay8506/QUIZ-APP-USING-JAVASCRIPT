const quizDB=[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hyper text mark language",
        b: "High transfer mark language",
        c: "Hyper text markup language",
        d: "High time markup language",
        ans: "ans3"

    },
    {
        question: "Q2:Who is the father of Computers?",
        a:"James Gosling",
        b: "Charles Babbage",
        c:  "Bjarne Stroustup",
        d: "Dennis Ritchie",
        ans: "ans2"
    },



    {
        question: "Q3:Stack is a ------ .",
        a: "character",
        b: "Data type",
        c: " Data structure",
        d: "all of above",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following language does the computer understand?",
        a: "Computer understands only C Language",
        b: "Computer understands only Assembly Language",
        c: "Computer understands only Binary Language",
        d: "Computer understands only BASIC",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following is designed to control the operations of a computer?",
        a:"User" ,
        b:" Application Software",
        c:" System Software",
        d:" Utility Software",
        ans:"ans3"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');




const answers=document.querySelectorAll('.answer');



const showScore=document.querySelector('#showScore');

 

    let questionCount=0;
    let score=0;

const loadQuestion =() =>{

    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
   
}


loadQuestion();


const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

}

const deselectAll=() => {

    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}



submit.addEventListener('click',() => {
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer ==quizDB[questionCount].ans){
        score++;
    };

        questionCount++;

        deselectAll();

        if(questionCount< quizDB.length){
            loadQuestion();
        }

        else{
            showScore.innerHTML=`
                <h3> Your Scored ${score}/${quizDB.length} </h3>            
                <button class="btn" onclick="location.reload()">RESTART QUIZ</button>
            `;

            showScore.classList.remove('scoreArea');
        }

});
