import undraw from '../../components/undraw_web_devices_re_m8sc.svg';
import cardBoardBlack from '../../components/icons/icons8-cardboard-box-50-black.png';
import './Header.css';

function Header() {
  return (
    <div className="headercontainer">
        <div className='container'>
            <div className='row'>
                <div className='CampoInfo col-5'>
                    <img src={cardBoardBlack} alt="box black"/>
                    <h1>Make your website more beautiful with <test className='logoTest'>Preset</test>Code</h1>
                    <br/>
                    <a className='ButtomStyle'>About Us</a>
                </div>
                <div className='CampoUndraw col-7'>
                    <img src={undraw} alt="img - undraw_web_devices"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;