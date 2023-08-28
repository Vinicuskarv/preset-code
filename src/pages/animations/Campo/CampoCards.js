import './CampoMaster.css';
import CardVertical from "./CardsExmples/VerticalCard";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CampoCards() {

  const Card1 = 
`
<div class="card">
    <img src="./img1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Roboto:wght@100&display=swap');
.card {
    width: 18rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    margin: 20px;
    background-color: #fff;
  }
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-body {
    padding: 1.25rem;
  }
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .card-text {
    margin-bottom: 1rem;
    font-family: 'Kanit', sans-serif;
    font-family: 'Roboto', sans-serif;
  }
</style>
`
    return (
      <div className='CampoInfoMaster'>
        <div className='container'>
          <h2>Cards</h2>
        </div>
        <div className='KitExple'>          
            <h4>Simple Card</h4>
            <CardVertical/>
        </div>
        <div className='KitExple'>
            <div className='CampoCode'>
                <SyntaxHighlighter language="html" style={coy}>
                    {Card1}
                </SyntaxHighlighter>
            </div> 
        </div>
        <br/>
      </div>
    );
  }
  
  export default CampoCards;
  