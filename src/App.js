import SignIndex from './components/sign/SignIndex';
import MainContext from './contexts/MainContext';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

function App() {
  const { isSigned } = useContext(MainContext)
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          {!isSigned ? <SignIndex /> :
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          }
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
