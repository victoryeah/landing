import './App.css';
import { Footer } from './components/Footer/Footer'
import { DiscoButton } from './components/DiscoButton/DiscoButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FRBRG Ventures</h1>
        <p className={"subtitle"}>Building software for the climate</p>
      </header>
      
      <DiscoButton />

      <Footer />
    </div>
  );
}

export default App;
