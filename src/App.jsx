import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProjectPage from "./Pages/SingleProjectPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keepmoving" element={<SingleProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
