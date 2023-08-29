import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CampoMaster.css';
import MoveTextLeft from './AnimationsExamples/MoveTextLeft';


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
`;

    return (
        <div className='CampoInfoMaster'>
            <div className='container'>
            <h2>Animations</h2>
            </div>
            <div className='KitExple'>
                <h4>Modern Typing Effect</h4>
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
        </div>
    );
  }
  
  export default CampoAnimations;