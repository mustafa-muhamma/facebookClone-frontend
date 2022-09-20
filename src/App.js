<<<<<<< HEAD
import { Route, Router, Switch } from 'react-router-dom';
import Index from './components/Index';
=======
import { Router } from 'react-router-dom';
import './App.css';
>>>>>>> 3df739fd0358ca49a80051610eb6836e5db7deca
import { MainProvider } from './contexts/MainContext';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <div className="content">
        <MainProvider>
         <Index />
        </MainProvider>
      </div>
=======
      <Router>
        <MainProvider>
          
        </MainProvider>
      </Router>
>>>>>>> 3df739fd0358ca49a80051610eb6836e5db7deca
    </div>
  );
}

export default App;
