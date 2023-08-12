import undraw from '../../components/undraw_web_devices_re_m8sc.svg'
import './Header.css'

function Header() {
  return (
    <div className="headercontainer">
        <div className='container ContainerInterno row'>
            <div className='CampoInfo col-6'>
                <h1>Make your website more beautiful with <test className='logoTest'>Preset</test>Code</h1>
                <br/>
                <a className='ButtomStyle'>About Us</a>
            </div>
            <div className='CampoUndraw col-6'>
                <img src={undraw} alt="img - undraw_web_devices"/>
            </div>
        </div>
      
    </div>
  );
}

export default Header;