import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/pages/Header';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Header />}></Route>
   </Routes>
   </>
  );
}

export default App;
