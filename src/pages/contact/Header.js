import './Header.css';
import imgtop from '../../components/undraw_personal_info_re_ur1n.svg';
import ContaineIcons from '../../components/containerIcons';
function Header() {
  return (
    <div className="primaryCamp">
        <div className='imgTopPersonal'>
            <img src={imgtop} alt="undraw_personal_info_re_ur1n"/>
        </div>
        <div className='CampoInfoContact'>
            <p>
                Hello! I made this site with the intention of improving my React skills. If you notice any
                something that can be improved, please contact me through one of the platforms
                below. I would love to receive your suggestions so that I can improve and practice my skills even more.
                skills with this powerful tool. Your feedback is extremely valuable to me. Let's go
                together make this project even better!
            </p>
            <ContaineIcons/>
        </div>
    </div>
  );
}

export default Header;