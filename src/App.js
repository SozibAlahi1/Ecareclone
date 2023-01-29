
import './App.css';
import  "bootstrap/dist/css/bootstrap.css";
import  "bootstrap/dist/js/bootstrap.bundle.js";
import Home from './component/Home';
import Gallery from './/component/pages/Gallery';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        {/* Router Work Here */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>

        {/* Router Work End */}

        
    </>
  );
}

export default App;
