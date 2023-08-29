import './RotateImg.css';
import imgRotate1 from '../../../../components/imgExaple/icons8-rotate-50.png';
import imgRotate2 from '../../../../components/imgExaple/icons8-rotate-50-1.png';

function RotateImg() {
    return (
        <div className="CampImg">
            <img className="CampoRotatePositiv" src={imgRotate1} alt="rotate"/>
            <img className="CampoRotateNegativ" src={imgRotate2} alt="rotate"/>
        </div>
    );
  }
  
  export default RotateImg;