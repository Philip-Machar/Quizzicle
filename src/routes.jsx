import Intro from "./components/Intro";
import Questions from "./components/Questions";

const routes = [
    { path: "/", element: <Intro /> },
    { path: "/questions", element: <Questions /> },
]

export default routes;
