

import { createReduxModule } from "hooks-for-redux";

const initialState = {
  quizzStated: false,
  showResult: false,
  currentQuestion: 0,
  score: 0,
  questions: [
    {
      title: "Vad heter huvudstaden i Sverige?",
      answers:["Malmö",
      "Göteborg",
      "Stockholm",],
      correctAnswer: 2,
      id: 1,
    },
    {
      title: "Vad heter huvudstaden i Spanien??",
       answers: ["Malmö",
      "Göteborg",
      "Stockholm"],
      correctAnswer: 2,
      id: 2,
    },
    {
      title: "Vad heter huvudstaden i Tyskland??",
       answers: ["Malmö",
      "Göteborg",
      "Stockholm"],
      correctAnswer: 2,
      id: 3,
    },
  ],
};


export const [useQuiz, { setQuiz, removeQuiz, setStarted, setResult,setScore, setQuest}] =
  createReduxModule("Quizzes", initialState, {
    setQuiz: (state,quiz) => {
      console.log(state)
      return { ...state, questions:[...state.questions, quiz]}
      
    },
    removeQuiz: (state, objectID) => {
      console.log(state)
      return {
        ...state,
        questions: state.questions.filter(
          (questions) => questions.id != objectID
        ),
      };
    },

    setStarted: (state, started) =>{
    return{
      ...state, quizzStated:started
    }
    },
    setScore: (state,score) => {
      return{...state, score: score+1}
    },
    
    setQuest: (state,currentQuestion) =>{
  	return {...state, currentQuestion: currentQuestion+1 }
    

    }
    
    
    },
    );


