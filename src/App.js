
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Booking from './components/Booking';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="booking" element={<Booking/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
