import Home from "./routes/Home";
import Mdetail from "./routes/Mdetail";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie/:id" element={<Mdetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
