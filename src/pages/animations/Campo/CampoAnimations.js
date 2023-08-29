import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CampoMaster.css';
import MoveTextLeft from './AnimationsExamples/MoveTextLeft';
import RotateImg from './AnimationsExamples/RotateImg';
import RotateCard from './AnimationsExamples/RotateCard';
function CampoAnimations() {

const Animation1 =
`
<div>
    <p class="CampoP">Front-end developer.</p>
</div>
<style>
  .CampoP{
    color: rgb(0, 0, 0);
    width: 100%;
    position: relative;
    animation: moveTextStart 5s linear infinite;
  }
  @keyframes moveTextStart {
  0% {
    left: 0;
  }
  50%{
    left: 50px;
  }
  100% {
    left: 0px;
  }
}
</style>
`
const Animation2 = 
`
<div class="CampImg">
    <img class="CampoRotatePositiv" src="img1.png" alt="rotate">
    <img class="CampoRotateNegativ" src="img2.png" alt="rotate">
</div>
<style>
  .CampImg{
    display: flex;
  }
  .CampoRotateNegativ,.CampoRotatePositiv{
    color: rgb(0, 0, 0);
    width: 30px;
    margin: 5px;
    transform: rotate(360deg);
  }
  .CampoRotatePositiv{
    animation: CampoRotatePositiv 5s linear infinite;
}
@keyframes CampoRotatePositiv {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
} 
.CampoRotateNegativ{
    animation: CampoRotateNegativ 5s linear infinite;
}
@keyframes CampoRotateNegativ {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}
</style>
`
const Animation3 =
`
<div class="card-container">
    <div class="card">
        <div class="card-face front">
            <p>Front</p>
        </div>
        <div class="card-face back">
            <p>Back</p>
        </div>
    </div>
</div>
<style>
  .card-container {
    perspective: 1000px;
    width: 200px;
    height: 200px;
    position: relative;
  }
  .card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  .card:hover {
    transform: rotateY(180deg);
  }
  .card-face {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border: 1px solid #b5b5b596;
    background-color: white;
    border-radius: 10px;
  }
  .front {
    transform: rotateY(0deg);
    background: linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250));
  }
  .back {
    transform: rotateY(180deg);
    background: linear-gradient(to right, #F39C12,  #E74C3C);
  }
</style>
`
    return (
        <div className='CampoInfoMaster'>
            <div className='container'>
            <h2>Animations</h2>
            </div>
            <div className='KitExple'>
                <h4>Move Text</h4>
                <MoveTextLeft/>
            </div>
            <div className='KitExple'>
                <div className='CampoCode'>
                    <SyntaxHighlighter language="html" style={coy}>
                        {Animation1}
                    </SyntaxHighlighter>
                </div> 
            </div>
            <br/>
            <div className='KitExple'>
                <h4>Rotate Img</h4>
                <RotateImg/>
            </div>
            <div className='KitExple'>
                <div className='CampoCode'>
                    <SyntaxHighlighter language="html" style={coy}>
                        {Animation2}
                    </SyntaxHighlighter>
                </div> 
            </div>
            <br/>
            <div className='KitExple'>
                <h4>Card Rotate</h4>
                <RotateCard/>
            </div>
            <div className='KitExple'>
                <div className='CampoCode'>
                    <SyntaxHighlighter language="html" style={coy}>
                        {Animation3}
                    </SyntaxHighlighter>
                </div> 
            </div>
        </div>
    );
  }
  
  export default CampoAnimations;