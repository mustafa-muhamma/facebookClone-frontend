import { Router } from 'react-router-dom';
import './App.css';
import { MainProvider } from './contexts/MainContext';

function App() {
  return (
    <div className="App">
      <Router>
        <MainProvider>
          
        </MainProvider>
      </Router>
    </div>
  );
}

export default App;
