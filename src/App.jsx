import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
