import { useState, useEffect } from "react"

const Questions = () => {
    const [questions, setQuestions] = useState([])

    //Decoding HTML entities
    const decodeHtml = (html) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html;
        return textArea.value;
    }

    //shuffling algorithm for choices
    const shuffle = (incorrect_answers, correct_answer) => {
        const answers = [...incorrect_answers];
        
        const randomIndex = Math.floor(Math.random() * (answers.length + 1));
        answers.splice(randomIndex, 0, correct_answer);
        
        return answers;
    }

    //fetching the questions and setting them to the questions state
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
                const data = await res.json();
                
                const decodedQuestions = data.results.map((question) => ({
                    ...question,
                    question: decodeHtml(question.question),
                    correct_answer: decodeHtml(question.correct_answer),
                    incorrect_answers: question.incorrect_answers.map(incorrect_answer => decodeHtml(incorrect_answer)),
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
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10 px-8">
                {
                    questions.map((question, index) => {
                        return (
                            <div key={index} className="text-lg">
                                <div className="font-semibold">{question.question}</div>
                                <div className="flex gap-4 mt-3">
                                    {
                                        shuffle(question.incorrect_answers, question.correct_answer).map((answer, index) => {
                                            return (
                                                <div key={index} className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#c1c4fc] hover:border-transparent">{answer}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="w-full flex justify-center items-center gap-4">
                    <div className="font-bold">You have scored 3/5 correct</div>
                    <button className="bg-[#465090] py-2 px-4 rounded-md min-w-12 text-white">Check Answers</button>
                </div>
            </div>
        </div>
    )
}

export default Questions
