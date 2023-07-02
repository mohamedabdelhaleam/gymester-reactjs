
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Summer from './components/Summer/Summer';
import Working from './components/WorkingHours/Working';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
      <Summer />
      <Working />
    </div>
  );
}

export default App;
