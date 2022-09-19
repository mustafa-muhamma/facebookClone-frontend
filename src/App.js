import { Route, Router, Switch } from 'react-router-dom';
import Index from './components/Index';
import { MainProvider } from './contexts/MainContext';

function App() {
  return (
    <div className="App">
      <div className="content">
        <MainProvider>
         <Index />
        </MainProvider>
      </div>
    </div>
  );
}

export default App;
