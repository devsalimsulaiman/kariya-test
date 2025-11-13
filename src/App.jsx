import Homepage from "./pages/Homepage.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Waitlist from "./pages/Waitlist.jsx";
// import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="Waitlist" element={<Waitlist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
