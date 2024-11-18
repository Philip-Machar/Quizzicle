import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="flex flex-col gap-2 justify-center text-center px-24">
        <h1 className="text-3xl text-[#465090] font-bold">Quizzicle</h1>
        <p>Test your knowledge and challenge yourself with this fun multiple-choice quiz. Are you ready to begin?</p>
        <Link to="/questions">
            <button className="bg-[#465090] py-2 px-4 rounded-md min-w-12  text-white">Start Quiz</button>
        </Link>
    </div>
  )
}

export default Intro;
