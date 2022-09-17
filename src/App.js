import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </>
  );
}

export default App;
