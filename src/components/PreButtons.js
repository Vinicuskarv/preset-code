import './PreButtons.css'
function PreButtons({ Value, Descricao, Id}) {
    return (
        <div className='col'>
            <button className="EstiloPadrao" alt={Descricao} id={Id}>{Value}</button>
        </div>
      );
    }
    
    export default PreButtons;