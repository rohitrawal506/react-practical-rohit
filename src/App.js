import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage.tsx";
import CharacterDetailsPage from "./pages/CharacterDetailsPage.tsx";
import "./tailwind.css";

function App() {
  return (
    <>
      <div
        className="bg-fixed bg-no-repeat bg-center bg-cover bg-slate-300"
        style={{ backgroundImage: "url(/new-image.jpeg)" }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/character/:id" element={<CharacterDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
