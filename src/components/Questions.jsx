import { useState, useEffect } from "react"

const Questions = () => {
    const [questions, setQuestions] = useState([])

    //Decoding HTML entities
    const decodeHtml = (html) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = html;
        return textArea.value;
    }

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch("https://opentdb.com/api.php?amount=5");
                const data = await res.json();
                //Deconde questions and answers
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

      // Conditional rendering to check if questions are available
    if (questions.length === 0) {
        return <div>Loading...</div>; // Show loading message until questions are fetched
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10 px-8">
                <div className="text-lg">
                    <div className="font-bold">{questions[0].question}</div>
                    <div className="flex gap-4 mt-3">
                    <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#c1c4fc] hover:border-transparent">Hola</div>
                    <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#c1c4fc] hover:border-transparent">Bonjour</div>
                    <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#c1c4fc] hover:border-transparent">Ciao</div>
                    <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer hover:bg-[#c1c4fc] hover:border-transparent">Namaste</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
