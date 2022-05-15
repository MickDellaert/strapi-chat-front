import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App h-full">
      <Login/>
      <MainContainer />
    </div>
  );
}

export default App;
