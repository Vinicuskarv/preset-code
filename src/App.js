import Home from './pages/home/PageHome';
import About from './pages/about/PageAbout';
import Contact from './pages/contact/PageContact';
import Animetions from './pages/animations/PageAnimetions';
import { Route, BrowserRouter,Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element = { <Home/> }  path="/"/>
          <Route element = { <About/> }  path="/About" />
          <Route element = { <Animetions/> }  path="/Animations" />   
          <Route element = { <Contact/> }  path="/Contact" />                    

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
