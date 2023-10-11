const StartBtn = document.getElementById('start-btn')
const NextBtn = document.getElementById('next-btn')


const QuestionConElement = document.getElementById('question-box');
const QuestionElement = document.getElementById('questions');
const AnswerBtnElement = document.getElementById('answer-btns');


let shuffledQuests, CurrentQuestionIndex;
let quizScore = 0; 


function selectAnswer(e){
    const SelectedButton =e.target
    const correct = SelectedButton.dataset.correct


    setStatusClass(document.body, correct)
    Array.from(AnswerBtnElement.children). forEach ((button)=>{
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClassElement (element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
   }else{
    element.classList.add('wrong')
   }
}


function clearStatusClass (element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "what is the full meaning HTML?",
        answers: [
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'Hyperlink Meet Land', correct: false},
            {text: 'Hybrid Markup Language', correct: false},
            {text: 'Hypertext Mark Language', correct: false}

        ],
    },

    {
        question: "Which of these is a JavaScript Framework?",
        answers: [
            {text: 'Python', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},
            {text: 'Django', correct: false}

        ],
    },

    {
        question: "Which tag is used to create a check box?",
        answers: [
            {text: '<checkbox>', correct: false},
            {text: '<Input type="checkbox">', correct: true},
            {text: '<type="checkbox">', correct: false},
            {text: ' None of the above', correct: false}
        ],
    },

    {
        question: "Which attribute set the text direction?",
        answers: [
            {text: 'dir', correct: true},
            {text: 'lang', correct: false},
            {text: 'direction', correct: false},
            {text: 'sub', correct: false}
        ],

    },

  {
    question: "Which HTML tag produces the biggest heading?",
    answers: [
        {text: '<H7>', correct: false},
        {text: '<H4>', correct: false},
        {text: '<H5>', correct: false},
        {text: '<H1>', correct: true}
    ],
  },

  {
    question: "Which operator is used to assign a value to a variable?",
    answers: [
        {text: '=', correct: true},
        {text: '/`', correct: false},
        {text: '-', correct: false},
        {text: '+', correct: false},
    ],

  },

  {
    question: "Which doctype is correct for HTML5?",
    answers: [
        {text: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd">', correct: false},
        {text: '<!DOCTYPE HTML5>', correct: false},
        {text: 'all of the above', correct: false},
        {text: 'none', correct: true}
    ],

  },

  {
    question: "",
    answers: [
        {text: '', correct: true},
        {text: '', correct: false},
        {text: '', correct: false},
        {text: '', correct: false}
    ],
  },
  {
    question: "",
    answers: [
        {text: '', correct: true},
        {text: '', correct: false},
        {text: '', correct: false},
        {text: '', correct: false}
    ],
  },
  {
    question: "",
    answers: [
        {text: '', correct: true},
        {text: '', correct: false},
        {text: '', correct: false},
        {text: '', correct: false}
    ],
  },
  {
    question: "",
    answers: [
        {text: '', correct: true},
        {text: '', correct: false},
        {text: '', correct: false},
        {text: '', correct: false}
    ],
  },
  {
    question: "",
    answers: [
        {text: '', correct: true},
        {text: '', correct: false},
        {text: '', correct: false},
        {text: '', correct: false}
    ],
  },


  


    
        
]


