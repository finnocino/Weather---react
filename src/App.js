import './App.css';
import Weather from './Weather';
import './Weather';
import Footer from './Footer';
import "./Footer";

function App() {
  return (
    <div>
      <Weather
        currentTime={2}
        description="windy"
        humidity={60}
        wind={40}
        temperature={21}
      />
      <Footer />
    </div>
  );
}
export default App;
