import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/login/Login";

function App() {

  const [newUserId, setNewUserId] = useState()
  useEffect(()=> console.log( "test" + newUserId),[newUserId])

  return (
    <>
      <Router>
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<Login newUserId={newUserId} setNewUserId={setNewUserId}/>} />
            <Route path="/chat/:id" element={<MainContainer newUserId={newUserId}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
