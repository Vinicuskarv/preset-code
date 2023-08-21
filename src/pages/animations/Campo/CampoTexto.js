import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CampoMaster.css';

const Carousel1=
`<body>
  <div class="hello">
      <h3>Front-end developer.</h3>
  </div>
</body>
<style>  
  .hello h3 {
    position: relative;
    color: #152860;a
    text-align: center;
    white-space: nowrap;
    font-size: 40px;
    letter-spacing: 0.0625em;
    width: calc(20ch + 1.25em);

    &:after {
      display: block;
      position: absolute;
      content: '';
      width: calc(20ch + 1.25em);
      height: 2ex;
      left: 0;
      top: 0;
      background: #eff5ed;
      animation: .6s blink 20, move 3s 1.5s forwards steps(1);
      border-left: 1px solid #152860;
      box-shadow: 0px 1ex 0px 0px #eff5ed;
    }
  }

  @keyframes move {
    5% {
      width: calc(20ch + 1.25em - (1ch + 0.0625em));
      left: calc(1ch + 0.0625em);
    }
    10% {
      width: calc(20ch + 1.25em - (2ch + 0.125em));
      left: calc(2ch + 0.125em);
    }
    15% {
      width: calc(20ch + 1.25em - (3ch + 0.1875em));
      left: calc(3ch + 0.1875em);
    }
    20% {
      width: calc(20ch + 1.25em - (4ch + 0.25em));
      left: calc(4ch + 0.25em);
    }
    25% {
      width: calc(20ch + 1.25em - (5ch + 0.3125em));
      left: calc(5ch + 0.3125em);
    }
    30% {
      width: calc(20ch + 1.25em - (6ch + 0.375em));
      left: calc(6ch + 0.375em);
    }
    35% {
      width: calc(20ch + 1.25em - (7ch + 0.4375em));
      left: calc(7ch + 0.4375em);
    }
    40% {
      width: calc(20ch + 1.25em - (8ch + 0.5em));
      left: calc(8ch + 0.5em);
    }
    45% {
      width: calc(20ch + 1.25em - (9ch + 0.5625em));
      left: calc(9ch + 0.5625em);
    }
    50% {
      width: calc(20ch + 1.25em - (10ch + 0.625em));
      left: calc(10ch + 0.625em);
    }
    55% {
      width: calc(20ch + 1.25em - (11ch + 0.6875em));
      left: calc(11ch + 0.6875em);
    }
    60% {
      width: calc(20ch + 1.25em - (12ch + 0.75em));
      left: calc(12ch + 0.75em);
    }
    65% {
      width: calc(20ch + 1.25em - (13ch + 0.8125em));
      left: calc(13ch + 0.8125em);
    }
    70% {
      width: calc(20ch + 1.25em - (14ch + 0.875em));
      left: calc(14ch + 0.875em);
    }
    75% {
      width: calc(20ch + 1.25em - (15ch + 0.9375em));
      left: calc(15ch + 0.9375em);
    }
    80% {
      width: calc(20ch + 1.25em - (16ch + 1em));
      left: calc(16ch + 1em);
    }
    85% {
      width: calc(20ch + 1.25em - (17ch + 1.0625em));
      left: calc(17ch + 1.0625em);
    }
    90% {
      width: calc(20ch + 1.25em - (18ch + 1.125em));
      left: calc(18ch + 1.125em);
    }
    95% {
      width: calc(20ch + 1.25em - (19ch + 1.1875em));
      left: calc(19ch + 1.1875em);
    }
    100% {
      width: calc(20ch + 1.25em - (20ch + 1.25em));
      left: calc(20ch + 1.25em);
    }
  }
  @keyframes blink {
    0% {
      border-left-color: #152860;
    }
    50% {
      border-left-color: #152860;
    }
    51% {
      border-left-color: #eff5ed;
    }
    100% {
      border-left-color: #eff5ed;
    }
  }
</style> 
`

function CampoTexto() {
  return (
    <div className='CampoInfoMaster'>
        <div className='container'>
          <h2>Texto</h2>
          </div>
        <div className='KitExple'>          
            <div className='d-flex'>
                <h4>Single Click Carousel</h4>
            </div>
            
        </div>
        <div className='KitExple'>
            <div className='CampoCode'>
                <SyntaxHighlighter language="html" style={coy}>
                    {Carousel1}
                </SyntaxHighlighter>
            </div> 
        </div>
        <div className='KitExple'>          
            <div className='d-flex'>
                <h4>Single Click Campo Texto</h4>
            </div>
        </div>
    </div>
  );
}

export default CampoTexto;