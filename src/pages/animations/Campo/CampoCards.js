import './CampoMaster.css';
import CardVertical from "./CardsExmples/VerticalCard";
import CardHorizontal from "./CardsExmples/HorizontalCard";
import CardOverlay from "./CardsExmples/OverlayCard";
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
const Card2 =
`
<div class="custom-card">
<div class="custom-row">
  <div class="custom-col custom-col-md-4">
    <img src="./img2.jpg" class="custom-img" alt="...">
  </div>
  <div class="custom-col custom-col-md-8">
    <div class="custom-card-body">
      <h5 class="custom-card-title">Card title</h5>
      <p class="custom-card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&family=Roboto:wght@100&display=swap');
.custom-card {
  width: 440px;
  border: 1px solid #c1c1c1;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  overflow: hidden;
}
.custom-row {
  display: flex;
  flex-wrap: wrap;
}
.custom-col {
  flex: 1;
}
.custom-col-md-4 {
  flex-basis: calc(40% - 2rem);
  max-width: calc(40% - 2rem);
}
.custom-col-md-8 {
  flex-basis: calc(60% - 2rem);
  max-width: calc(60% - 2rem);
}
.custom-img {
  display: block;
  width: 100%;
  height: 220px;
  border-radius: 0.25rem 0 0 0.25rem;
  object-fit: cover;
}
.custom-card-body {
  padding: 1rem;
}
.custom-card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.custom-card-text {
  margin-bottom: 1rem;
  font-family: 'Kanit', sans-serif;
  font-family: 'Roboto', sans-serif;
}
@media screen and (max-width: 550px) {
  .custom-row {
    display: inline;
    flex-wrap: none;
  }
  .custom-card {
    max-width: 240px;
  }
  .custom-col-md-4,
  .custom-col-md-8 {
    max-width: 100%;
  }
}
</style>
`
const Card3 = 
`
<div class="custom-card custom-text-bg-dark">
  <div class="custom-card-img-wrapper">
    <img src="./img3.jpg" class="custom-card-img" alt="...">
  </div>
  <div class="custom-card-img-overlay">
    <h5 class="custom-card-title">Card title</h5>
    <p class="custom-card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="custom-card-text custom-text-small">Last updated 3 mins ago</p>
  </div>
</div>
<style>
.custom-card {
  position: relative;
  display: inline-block;
  width:300px;
  height: 200px;
  border: 1px solid #343a40;
  border-radius: 0.25rem;
  overflow: hidden;
}
.custom-text-bg-dark {
  background-color: #414a52;
  color: #fff;
}
.custom-card-img-wrapper {
  position: relative;
  overflow: hidden;
}
.custom-card-img {
  display: block;
  width: 300px;
  height: 200px;
  position: relative;
  object-fit: cover;
}
.custom-card-img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  background: rgba(62, 62, 62, 0.073);
}
.custom-card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #fff;
}
.custom-card-text {
  margin-bottom: 1rem;
  color: #fff;
}
.custom-text-small {
  font-size: 0.75rem;
  color: #f8f9fa;
}
</style>
`
    return (
      <div className='CampoInfoMaster'>
        <div className='container'>
          <h2>Cards</h2>
        </div>
        <div className='KitExple'>          
            <h4>Simple Card Vertical</h4>
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
        <div className='KitExple'>          
            <h4>Simple Card Horizontal Responsive</h4>
            <CardHorizontal/>
        </div>
        <div className='KitExple'>
            <div className='CampoCode'>
                <SyntaxHighlighter language="html" style={coy}>
                    {Card2}
                </SyntaxHighlighter>
            </div> 
        </div>
        <br/>
        <div className='KitExple'>          
            <h4>Simple Card Text Overlap</h4>
            <CardOverlay/>
        </div>
        <div className='KitExple'>
            <div className='CampoCode'>
                <SyntaxHighlighter language="html" style={coy}>
                    {Card3}
                </SyntaxHighlighter>
            </div> 
        </div>
      </div>
    );
  }
  
  export default CampoCards;
  