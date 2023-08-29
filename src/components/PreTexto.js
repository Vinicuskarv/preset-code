import './PreTexto.css';

function PreTexto({ className , value}) {
  return (
    <div className={className}>
      <h3 className='h3'>{value}</h3>
    </div>
  );
}

export default PreTexto;
