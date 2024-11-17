import React from "react"

const App = () => {
  return (
    <main className="w-[600px] h-[90vh] bg-[#d9e2fd] shadow-xl rounded-lg py-6">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-10 px-8">
          <div className="text-lg">
            <div className="font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quasi!</div>
            <div className="flex gap-4 mt-3">
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Hola</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Bonjour</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Ciao</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Namaste</div>
            </div>
          </div>
          <div className="text-lg">
            <div className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere aperiam modi!</div>
            <div className="flex gap-4 mt-3">
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Hola</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Bonjour</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Ciao</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Namaste</div>
            </div>
          </div>
          <div className="text-lg">
            <div className="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat neque eum omnis!.</div>
            <div className="flex gap-4 mt-3">
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Hola</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Bonjour</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Ciao</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Namaste</div>
            </div>
          </div>
          <div className="text-lg">
            <div className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil ad dolorum sint quasi ut.</div>
            <div className="flex gap-4 mt-3">
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Hola</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Bonjour</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Ciao</div>
              <div className="min-w-12 border-2 border-[#000] py-1 px-2 rounded-xl grid place-content-center cursor-pointer">Namaste</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <div className="font-bold">You have scored 3/5 correct</div>
          <button className="bg-[#465090] py-2 px-4 rounded-md min-w-12 text-white">Check Answers</button>
        </div>
      </div>
    </main>
  )
}

export default App
