import './CampoButton.css';
import PreButtons from '../../components/PreButtons';
function CampoButton() {
  return (
    <div className='CampoInfoButtons'>
        <div className='container'>
            <h2>Hover</h2>
            <div className='d-flex row'>
            <PreButtons
                Value= "Nadadem"
                Descricao="nada tbm"
                Id = "1"
            />
            <PreButtons
                Value= "Nada"
                Descricao="nada tbm"
                Id = "2"
            />
            </div>

        </div>
    </div>
  );
}

export default CampoButton;