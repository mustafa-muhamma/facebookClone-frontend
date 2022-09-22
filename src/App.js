import SignIndex from './components/sign/SignIndex';
import { MainProvider } from './contexts/MainContext';

function App() {
  return (
    <div className="App">
      <div className="content">
        <MainProvider>
         <SignIndex />
        </MainProvider>
      </div>
    </div>
  );
}

export default App;
