import github from './icons/icons8-github-50.png';
import email from './icons/icons8-email-50.png';
import linkedin from './icons/icons8-linkedin-50.png';
import './containerIcons.css'

function ContaineIcons() {
  return (
    <div className="ULNavbar ULNavbaricons">
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
  );
}

export default ContaineIcons;