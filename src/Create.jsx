import { setQuiz, useQuiz} from "./redux/quizz";
import { useState } from "react";

export default function Create() {
    const [title, setTitle] = useState();
    const [corAns, setcorAns] = useState();
    const [answer1, setAnswers1] = useState();
    const [answer2, setAnswers2] = useState();
    const [answer3, setAnswers3] = useState();

    
   
     /* title: "Vad heter huvudstaden i Sverige?",
  answers:["Malmö",
  "Göteborg",
  "Stockholm",],
  correctAnswer: 2,
  id: 1,*/
    function handleAddQuestion() {
      let newQuestions =[];
      newQuestions.push(answer1)
      newQuestions.push(answer2)
      newQuestions.push(answer3)
      const question = {
        title: title,
        answers: newQuestions,
        correctAnswer: corAns,
        id: Date.now(),
      };
      setQuiz(question);
   
    }
  
    return (
      <div className="bg-gray-500 p-10 space-x-5 space-y-5">
        <h2>Create new Question</h2>
        
        <div>
        <label>Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
        <label>Answers 1</label>
        <input type="text" onChange={(e) => setAnswers1(e.target.value)} />
        </div>
        <div>
        <label>Answers 2</label>
        <input type="text"  onChange={(e) => setAnswers2(e.target.value)} />
        </div>
        <div>
        <label>Answers 3</label>
        <input type="text" onChange={(e) => setAnswers3(e.target.value)} />
        </div>
        <div>
        <label>What answer of the 3 answers is correct? 1,2 or 3</label>
        <input type="text" onChange={(e) => setcorAns(e.target.value -1)} />
        
        </div>
        
        <button onClick={handleAddQuestion} className=" p-3 bg-orange-600 rounded-3xl hover:bg-orange-300">Add Question</button>
        
      </div>
    );
  }
  