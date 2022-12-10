import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Header from "./Pages/Navbar/Header";
import About from "./Pages/Navbar/About/About";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className=" px-32 bg-gradient-to-b from-indigo-100 to-pink-200">
      <div>
        <Profile></Profile>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
