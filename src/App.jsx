//React Router (v6)
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import HousingFile from "./pages/HousingFile/HousingFile";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing-file" element={<HousingFile />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
