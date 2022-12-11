import SignIndex from './components/sign/SignIndex';
import MainContext from './contexts/MainContext';
import '../src/app.css';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import axios from 'axios';

function App() {
  const { isSigned, token } = useContext(MainContext);

  if (isSigned) {
    const uToken = JSON.parse(token)
    axios.defaults.headers.common['Authorization'] = uToken;
  }


  return (
    <div className="App">
      <BrowserRouter>
        {!isSigned ? <SignIndex /> :
          <div className='routes'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile/:_id' element={<Profile />} />
            </Routes>
          </div>
        }
      </BrowserRouter>
    </div>
  );
}
export default App;
