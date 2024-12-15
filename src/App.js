import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
