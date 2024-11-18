import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <main className="w-[1000px] h-[90vh] bg-[#d9e2fd] shadow-xl rounded-lg py-6 grid place-content-center">
      <RouterProvider router={router} />
    </main>
  )
}

export default App;
