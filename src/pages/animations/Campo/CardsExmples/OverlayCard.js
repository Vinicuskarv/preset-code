import img3 from "../../../../components/imgExaple/img3.jpg";
import "./OverlayCard.css";

const CardOverlay = () => {
    return (
        <div className="custom-card1 custom-text-bg-dark1">
          <div className="custom-card-img-wrapper1">
            <img src={img3} className="custom-card-img1" alt="img Exaple" />
          </div>
          <div className="custom-card-img-overlay1">
            <h5 className="custom-card-title1">Card title</h5>
            <p className="custom-card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="custom-card-text custom-text-small1">Last updated 3 mins ago</p>
          </div>
        </div>
      );
}

export default CardOverlay;