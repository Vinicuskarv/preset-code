import github from './icons/icons8-github-50.png';
import email from './icons/icons8-email-50.png';
import linkedin from './icons/icons8-linkedin-50.png';
import cardBoardWhite from './icons/icons8-cardboard-box-50-white.png';
 
import './navbar.css';

function NavBar() {
  return (
    <div className="container-fluid" id="NavbarContainer">
        <div className="container">
            <ul className="ULNavbar">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>ANIMATIONS</li>
                <li>CONTACTO</li>
            </ul>
            <img src={cardBoardWhite} alt="box White"/>
            <div className="ULNavbar">
              <a href="https://www.linkedin.com/in/vinicius-carvalho-lucius/">
                <img src={linkedin} alt="icon linkedin"/>
              </a>
              <a href="https://github.com/Vinicuskarv">
                <img src={github} alt="icon github"/>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <img src={email} alt="icon email"/>
              </a>
            </div>
        </div>
    </div>
  );
}

export default NavBar;