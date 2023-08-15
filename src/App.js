import Home from './pages/home/PageHome';
import About from './pages/about/PageAbout';
import { Route, BrowserRouter,Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = { <Home/> }  path="/"/>
          <Route element = { <About/> }  path="/About" />
          <Route element = { <Home/> }  path="/Animations" />                    
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
