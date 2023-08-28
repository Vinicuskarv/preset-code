import './Header.css';
import CampoButton from './Campo/CampoButton';
import CampoTexto from './Campo/CampoTexto';
import CampoCards from './Campo/CampoCards';
import CampoAnimations from './Campo/CampoAnimations';
function Header() {
  return (
    <div className="ContainerHeaderPrimaria">
        <div className="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="Buttons-tab" data-bs-toggle="tab" data-bs-target="#Buttons-tab-pane" type="button" role="tab" aria-controls="Buttons-tab-pane" aria-selected="true">Buttons</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Carousel-tab" data-bs-toggle="tab" data-bs-target="#Carousel-tab-pane" type="button" role="tab" aria-controls="Carousel-tab-pane" aria-selected="false">Textos</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Card-tab" data-bs-toggle="tab" data-bs-target="#Card-tab-pane" type="button" role="tab" aria-controls="Card-tab-pane" aria-selected="false">Cards</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Placeholders-tab" data-bs-toggle="tab" data-bs-target="#Placeholders-tab-pane" type="button" role="tab" aria-controls="Placeholders-tab-pane" aria-selected="false">Animations</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="Buttons-tab-pane" role="tabpanel" aria-labelledby="Buttons-tab" tabindex="0">
                    <CampoButton/>
                </div>
                <div class="tab-pane fade" id="Carousel-tab-pane" role="tabpanel" aria-labelledby="Carousel-tab" tabindex="0">
                    <CampoTexto/>
                </div>
                <div class="tab-pane fade" id="Card-tab-pane" role="tabpanel" aria-labelledby="Card-tab" tabindex="0">
                    <CampoCards/>
                </div>
                <div class="tab-pane fade" id="Placeholders-tab-pane" role="tabpanel" aria-labelledby="Placeholders-tab" tabindex="0">
                    <CampoAnimations/>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Header;