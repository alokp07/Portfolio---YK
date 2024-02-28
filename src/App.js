import { Last } from 'react-bootstrap/esm/PageItem';
import './App.css';
import Experience from './components/Experience';
import LandingDiv from './components/LandingDiv';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <LandingDiv/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
