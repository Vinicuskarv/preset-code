import img1 from "../../../../components/imgExaple/img1.jpg";
import "./VerticalCard.css";

const CardVertical = () => {
  return (
    <div className="card">
      <img src={img1} className="card-img-top" alt="img Exaple" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}

export default CardVertical;
