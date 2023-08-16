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
                Olá! Fiz este site com a intenção de aprimorar minhas habilidades em React. Se você notar alguma 
                coisa que possa ser aperfeiçoada, por favor, entre em contato comigo por meio de uma das plataformas 
                abaixo. Adoraria receber suas sugestões para que eu possa aprimorar e praticar ainda mais minhas 
                habilidades com essa poderosa ferramenta. O seu feedback é extremamente valioso para mim. Vamos 
                juntos tornar este projeto ainda melhor!
            </p>
            <ContaineIcons/>
        </div>
    </div>
  );
}

export default Header;