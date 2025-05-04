import './App.css';
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';
import ContactUs from './component/Contact/ContactUs';
import Team from './component/Team/Team';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="team"><Team /></section>
      <section id="about"><About /></section>
      <section id="contact"><ContactUs /></section>
    </div>
  );
}

export default App;
