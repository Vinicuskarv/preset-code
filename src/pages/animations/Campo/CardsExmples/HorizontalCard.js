import img2 from "../../../../components/imgExaple/img2.jpg";
import "./HorizontalCard.css";

const CardHorizontal = () => {
  return (
    <div className="custom-card">
      <div className="custom-row">
        <div className="custom-col custom-col-md-4">
          <img src={img2} className="custom-img" alt="img Exaple" />
        </div>
        <div className="custom-col custom-col-md-8">
          <div className="custom-card-body">
            <h5 className="custom-card-title">Card title</h5>
            <p className="custom-card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHorizontal;