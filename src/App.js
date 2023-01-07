import { Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";
import Students from "./pages/Students/Students";
import AddStudent from "./pages/AddStudent/AddStudent";
import PresentStudents from "./pages/PresentStudents/PresentStudents";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/students" element={<Students />}/>
        <Route path="/add" element={<AddStudent />}/>
        <Route path="/present" element={<PresentStudents />}/>
      </Routes>
    </div>
  );
}

export default App;
