const quizData=[

    {
        question:'How Old is Vikas Shukla ?',
        a:'10',
        b:'33',
        c:'28',
        d:'56',
        correct:'b'
    },

    {
        question:'Which among the following is the largest nuclear power station of India by capacity?',
        a:'Tarapur',
        b:'Kaiga',
        c:'Kalyan',
        d:'Kundulum',
        correct:'a'
    },

    {
        question:'Which company has partnered with Google to help Indian firms in leveraging digital technology ?',
        a:'Accenture',
        b:'McKinsey',
        c:'Caterpillar',
        d:'Deloitte',
        correct:'d'
    },

    {
        question:'Best Programming Language in 2020?',
        a:'Java',
        b:'Dot Net',
        c:'Python',
        d:'C#',
        correct:'a'
    },

    {
        question:'‘We Think Digital’ is a digital literacy program of which global technological company ?',
        a:'Google',
        b:'Facebook',
        c:'Apple',
        d:'Amazon',
        correct:'b'
    },

    {
        question:'Which smart-phone maker launched the first 5G-enabled smartphone of India ?',
        a:'Xiao0mi',
        b:'Oppo',
        c:'Vivo',
        d:'Realme',
        correct:'d'
    },

    {
        question:'What is ‘Eventbot’, that was seen in news recently?',
        a:'Cryptocurrency',
        b:'Disinfectant Robot',
        c:'Malware',
        d:'Chatbot',
        correct:'c'
    }

]
const quiz=document.getElementById("quiz")
const questionsEl=document.getElementById("questions")
const answersEls=document.querySelectorAll(".answer");
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();
function getSelected()
{
    
    let answer=undefined;
    answersEls.forEach((answerEL)=>{
        if(answerEL.checked)
        {
            answer= answerEL.id;
        }
    });
    return answer;
}

function deSelectAnswers()
{
answersEls.forEach((answerEL) =>{
    answerEL.checked=false;
});
}
function loadQuiz()
{
    deSelectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionsEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;


} 

    submitBtn.addEventListener('click',()=> {
 
    const answer=getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length)
        {
            loadQuiz();
    
        }else{
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions .</h2>
            <button onclick="location.reload()">Reload</button`;
        }

    }


  
});