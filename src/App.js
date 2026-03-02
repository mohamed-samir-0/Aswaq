
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './pages/home';
import Carts from './pages/carts';
import {Toaster} from 'react-hot-toast';
import ScrollToTop from './components/ScrollToTop';
import Checkout from './components/checkout';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {

  return(
    <>
     <Toaster position="top-center" />
     

    <Router>
    <ScrollToTop />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/cart" element={<Carts/>}/> 
      <Route path="/checkout" element={<Checkout/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      
      
      
    </Routes>
  

    
    </Router>
    </>
  )



}

export default App;
