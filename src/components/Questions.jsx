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
    };

    //Determinig which choice has been chosen
    const handleChoice = (questionId, answerId) => {
        setQuestions((prevQuestions) => {
            return (
                prevQuestions.map((question) => {
                    if (question.id === questionId) {
                        return { ...question, choseAnswerId: answerId}
                    } else {
                        return question
                    }
                })
            )
        })
    };

    //Show score
    const handleShowScore = () => {
        let score = 0;
        questions.forEach((question) => {
            const chosenAnswer = question.choices.find((answer) => answer.id === question.choseAnswerId)
            if (chosenAnswer?.answer === question.correct_answer) {
                score += 1
            }
        });
        setCount(score);
        setShowScore(true);
    };

     //shuffling algorithm for choices
     const shuffle = (incorrect_answers, correct_answer) => {
        const answers = [...incorrect_answers];
        
        const randomIndex = Math.floor(Math.random() * (answers.length + 1));
        answers.splice(randomIndex, 0, correct_answer);

        return answers.map((answer) => ({answer: answer, id: nanoid()}))
    };

    //Fetching questions
    const getQuestions = async () => {
        try {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple");
            const data = await res.json();
            
            const decodedQuestions = data.results.map((question) => {
                const decodedIncorrectAnswers = question.incorrect_answers.map((incorrect_answer) => decodeHtml(incorrect_answer));
                const decodedCorrectAnswer = decodeHtml(question.correct_answer);
            
                return {
                    ...question,
                    id: nanoid(),
                    question: decodeHtml(question.question),
                    correct_answer: decodedCorrectAnswer,
                    choseAnswerId: null,
                    incorrect_answers: decodedIncorrectAnswers,
                    choices: shuffle(decodedIncorrectAnswers, decodedCorrectAnswer),
                };
            });

            setQuestions(decodedQuestions);
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    };

    //restart game
    const restartGame = () => {
        setQuestions([])
        setCount(0);
        setShowScore(false);
        getQuestions();
    };

    //loading questions to state during the first render
    useEffect(() => {
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
                                            const isCorrect = question.correct_answer === answer.answer;
                                            return (
                                                <div 
                                                    key={answer.id} 
                                                    onClick={() => handleChoice(question.id, answer.id)}
                                                    className={`min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#465090] hover:text-white hover:border-transparent ${question.choseAnswerId === answer.id && "bg-[#465090] text-white border-transparent"} ${question.choseAnswerId === answer.id && !isCorrect && showScore && "bg-red-500 text-white border-transparent"} ${showScore && isCorrect && "bg-green-500 text-white border-transparent"}`}
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
                    {showScore ? <button 
                        onClick={restartGame}
                        className="bg-[#465090] py-2 px-4 rounded-md min-w-12 text-white"
                    >
                        Play Again!
                    </button> : <button 
                        onClick={handleShowScore}
                        className="bg-[#465090] py-2 px-4 rounded-md min-w-12 text-white"
                    >
                        Check Answers
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Questions;
