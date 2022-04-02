import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Phone from "./Phone/Phone";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/phone" element={<Phone></Phone>}></Route>
      </Routes>
    </>
  );
}

export default App;
