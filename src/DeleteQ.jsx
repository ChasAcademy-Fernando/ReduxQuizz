import { useQuiz, removeQuiz } from "./redux/quizz";
const DeleteQ = () => {
    const {questions} = useQuiz()
    return ( 

        <div className=" bg-sky-400 p-5">
            {questions.map((question)=>(
                <div key={question.id}>
                    {question.title}
                    <button onClick={()=>{removeQuiz(question.id)}}>Delete?</button>
                </div>
            ))}
        </div>
     );
}
 
export default DeleteQ;