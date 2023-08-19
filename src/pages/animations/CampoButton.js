import './CampoButton.css';
import PreButtons from '../../components/PreButtons';
import ButtonSearch from '../../components/buttonSearch';
function CampoButton() {
  return (
    <div className='CampoInfoButtons'>
        <div className='container'>
          <h2>Buttons</h2>
          <div className='KitExple'>
            <div className='d-flex'>
                <h4>Rounded Buttons</h4>
                <ButtonSearch/>
            </div>
            
            <div className='row Rounded'>
            <PreButtons
                Value= "OUTLINE"
                Descricao= "OUTLINE"
                Id = "Rounded1"
            />
            
            <PreButtons
                Value= "NORMAL"
                Descricao="NORMAL"
                Id = "Rounded2"
            />
            <PreButtons
                Value= "HOVER"
                Descricao="HOVER"
                Id = "Rounded3"
            />
            <PreButtons
                Value= "FOCUSED"
                Descricao="FOCUSED"
                Id = "Rounded4"
            />
            <PreButtons
                Value= "PRESSED"
                Descricao="PRESSED"
                Id = "Rounded5"
            />
            <PreButtons
                Value= "DISABLED"
                Descricao="DISABLED"
                Id = "Rounded6"
            />
          </div>
          </div>
          <div className='KitExple'>
            <div className='d-flex'>
                <h4>Radius Buttons</h4>
                <ButtonSearch/>
            </div>
            <div className='row Radius'>
            <PreButtons
                Value= "OUTLINE"
                Descricao="OUTLINE"
                Id = "Radius1"
            />
            <PreButtons
                Value= "NORMAL"
                Descricao="NORMAL"
                Id = "Radius2"
            />
            <PreButtons
                Value= "HOVER"
                Descricao="HOVER"
                Id = "Radius3"
            />
            <PreButtons
                Value= "FOCUSED"
                Descricao="FOCUSED"
                Id = "Radius4"
            />
            <PreButtons
                Value= "PRESSED"
                Descricao="PRESSED"
                Id = "Radius5"
            />
            <PreButtons
                Value= "DISABLED"
                Descricao="DISABLED"
                Id = "Radius6"
            />
          </div>
          </div>
          <div className='KitExple'>
            
            <div className='d-flex'>
                <h4>Squared Buttons</h4>
                <ButtonSearch/>
            </div>
            <div className='row Squared'>
            <PreButtons
                Value= "OUTLINE"
                Descricao="OUTLINE"
                Id = "Squared1"
            />
            <PreButtons
                Value= "NORMAL"
                Descricao="NORMAL"
                Id = "Squared2"
            />
            <PreButtons
                Value= "HOVER"
                Descricao="HOVER"
                Id = "Squared3"
            />
            <PreButtons
                Value= "FOCUSED"
                Descricao="FOCUSED"
                Id = "Squared4"
            />
            <PreButtons
                Value= "PRESSED"
                Descricao="PRESSED"
                Id = "Squared5"
            />
            <PreButtons
                Value= "DISABLED"
                Descricao="DISABLED"
                Id = "Squared6"
            />
          </div>
          </div>
          <div className='KitExple'>          
            <div className='d-flex'>
                <h4>Squared With Rounded Corners Buttons</h4>
                <ButtonSearch/>
            </div>
            <div className='row Corners'>
            <PreButtons
                Value= "OUTLINE"
                Descricao="OUTLINE"
                Id = "Corners1"
            />
            <PreButtons
                Value= "NORMAL"
                Descricao="NORMAL"
                Id = "Corners2"
            />
            <PreButtons
                Value= "HOVER"
                Descricao="HOVER"
                Id = "Corners3"
            />
            <PreButtons
                Value= "FOCUSED"
                Descricao="FOCUSED"
                Id = "Corners4"
            />
            <PreButtons
                Value= "PRESSED"
                Descricao="PRESSED"
                Id = "Corners5"
            />
            <PreButtons
                Value= "DISABLED"
                Descricao="DISABLED"
                Id = "Corners6"
            />
          </div>
          </div>
        </div>
    </div>
  );
}

export default CampoButton;