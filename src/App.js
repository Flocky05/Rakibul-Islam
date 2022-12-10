import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Header from "./Pages/Navbar/Header";
import About from "./Pages/Navbar/About/About";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="m-10">
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
