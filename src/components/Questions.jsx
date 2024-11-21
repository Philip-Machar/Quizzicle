import { useState, useEffect } from "react"
import { nanoid } from "nanoid";

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [count, setCount] = useState(0);
    const [showScore, setShowScore] = useState(false);

    //Decoding HTML entities
    const decodeHtml = (html) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html;
        return textArea.value;
    }

    //Determinig which choice has been chosen
    const handleChoice = (questionId, answerId) => {
        
    };

    //Show score
    const handleShowScore = () => {
        setShowScore(true)
    };

    //shuffling algorithm for choices
    const shuffle = (incorrect_answers, correct_answer) => {
        const answers = [...incorrect_answers];
        
        const randomIndex = Math.floor(Math.random() * (answers.length + 1));
        answers.splice(randomIndex, 0, correct_answer);

        return answers.map((answer) => ({answer: answer, id: nanoid()}))
    };

    //fetching the questions and setting them to the questions state
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
                const data = await res.json();
                
                const decodedQuestions = data.results.map((question) => ({
                    ...question,
                    id: nanoid(),
                    question: decodeHtml(question.question),
                    correct_answer: decodeHtml(question.correct_answer),
                    choseAnswerId: null,
                    incorrect_answers: question.incorrect_answers.map((incorrect_answer) => decodeHtml(incorrect_answer)),
                    choices: shuffle(question.incorrect_answers, question.correct_answer),
                }));

                setQuestions(decodedQuestions);
            } catch (error) {
                console.error(`Error: ${error}`)
            }
        };
        getQuestions();
    }, []);

    //Ensuring that the component is not loaded before the questions state is populated
    if (questions.length === 0) {
        return <div>Loading...</div>;
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10 px-8">
                {
                    questions.map((question) => {
                        return (
                            <div key={question.id} className="text-lg">
                                <div className="font-semibold">{question.question}</div>
                                <div className="flex gap-4 mt-3">
                                    {
                                        question.choices.map((answer) => {
                                            return (
                                                <div 
                                                    key={answer.id} 
                                                    onClick={() => handleChoice(question.id, answer.id)}
                                                    className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#465090] hover:text-white hover:border-transparent"
                                                >
                                                    {answer.answer}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="w-full flex justify-center items-center gap-4">
                    {showScore && <div className="font-bold">You have scored {count}/5 correct</div>}
                    <button 
                        onClick={handleShowScore}
                        className="bg-[#465090] py-2 px-4 rounded-md min-w-12 text-white"
                    >
                        Check Answers
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Questions;
