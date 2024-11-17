import React from "react"
import Qestions from "./components/Questions"
import Intro from "./components/Intro"

const App = () => {
  return (
    <main className="w-[600px] h-[90vh] bg-[#d9e2fd] shadow-xl rounded-lg py-6 grid place-content-center">
      <Intro />
    </main>
  )
}

export default App
