import NotfoundImg from "../../assets/img/OIP.jpg";
import "./index.scss";
// const NotfoundImg = require("../../assets/img/OIP.jpg");

export default function NotFound(params) {
  return (
    <div className="notfound">
      <div className="img-contain">
        <img src={NotfoundImg} alt="" />
      </div>
      <p className="title">not found</p>
    </div>
  );
}
