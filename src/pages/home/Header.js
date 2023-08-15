import undraw from '../../components/undraw_web_devices_re_m8sc.svg';
import vtod from '../../components/undraw_booked_re_vtod.svg';

import cardBoardBlack from '../../components/icons/icons8-cardboard-box-50-black.png';
import CardColor from '../../components/cardColor';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <div className="headercontainerPrimaria">
        <div className='container'>
            <div className='row'>
                <div className='CampoInfo col-12 col-lg-5'>
                    <img src={cardBoardBlack} alt="box black"/>
                    <h1>Make your website more beautiful with <test className='logoTest'>Preset</test>Code</h1>
                    <br/>
                    <Link className='ButtomStyle' to="/About">About Us</Link>
                </div>
                <div className='CampoUndraw col-8 col-lg-7 '>
                    <img src={undraw} alt="img - undraw_web_devices"/>
                </div>
            </div>
        </div>
    </div>
    <div className="headercontainerSegundario">
        <div className='container'>
            <CardColor/>
        </div>
    </div>
    <div className="headercontainerTerciario ">
        <div className='container'>
            <div className='row'>
                <div className='CampoText col-12 col-md-6'>
                    <p>
                        Este website foi concebido com a finalidade primordial de aprimorar significativamente a eficiência
                        no desenvolvimento de sites. Aqui, você encontrará funcionalidades pré-configuradas para agilizar o seu processo de entrega.
                    </p>
                </div>
                <div className='undraw_booked col-8 col-md-5'>
                    <img src={vtod} alt="img - undraw_booked_re_vtod"/>
                </div>
            </div>
        </div>
    </div>
    </>

  );
}

export default Header;