import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen flex bg-[#1F1E24]">
      <Routes>
        <Route path='/' element= {<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
