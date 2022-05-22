import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <div className="App h-full">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat/:id" element={<MainContainer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
