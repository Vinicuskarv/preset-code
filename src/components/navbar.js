import cardBoardWhite from './icons/icons8-cardboard-box-50-white.png';
import ContaineIcons from './containerIcons';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <div className="container-fluid" id="NavbarContainer">
        <div className="container">
            <ul className="ULNavbar">
                <li>
                  <Link to="/">HOME</Link> 
                </li>
                <li>
                  <Link to="/About">ABOUT</Link> 
                </li>
                <li>
                  <Link to="/">ANIMATIONS</Link> 
                </li>
                <li>
                  <Link to="/">CONTACTO</Link> 
                </li>
            </ul>
            <Link to="/"><img className="LogoIcon" src={cardBoardWhite} alt="box White"/></Link> 
            <ContaineIcons/>
        </div>
    </div>
  );
}

export default NavBar;