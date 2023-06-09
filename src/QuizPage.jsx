import {useQuiz,setStarted,setScore,setQuest} from "./redux/quizz";

function QuizzPage(){

const {questions,quizzStated, currentQuestion,score}= useQuiz();

    function checkAnswer(key){
        if (key == questions[currentQuestion].correctAnswer){
            alert("correct")
            setScore(score);
            
            
            console.log("correct, score is", score);
                     
        }

        else if (key !== questions[currentQuestion].correctAnswer){
            alert("incorrect")
        }
        
            setQuest(currentQuestion); 
    

    }

   
    function ShowQuizz(){
        return(
        <>
        <h1>THIS IS THE QUIZ</h1>
        <h2>Question {currentQuestion+1}. {questions[currentQuestion].title}</h2>
        <ul>
            {questions[currentQuestion].answers.map((item)=>(
                <li key={questions[currentQuestion].answers.indexOf(item)}>{item}
                <div>
                <button onClick={()=>checkAnswer(questions[currentQuestion].answers.indexOf(item))}>pick me</button>
                </div>
               
                </li>
                
            ))}   
        </ul>
        </>
        )
    }
   

    function QuizzRenderer(){
    }
    if (currentQuestion == questions.length ) {
      return (
      <>
      <h1>Restult</h1>
      <h2>your score was {score}/{questions.length}</h2></>
      );
    } else if (quizzStated) {
      return (<ShowQuizz/>);
    } else {
      return( <button onClick={()=>setStarted(true)}>Starta quizz</button>)
     
    }
        
    
    
    return(
        <>
          <QuizzRenderer/>
          
        </>
    )

    }
export default QuizzPage;