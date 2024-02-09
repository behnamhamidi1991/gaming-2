import { productions } from "../../data";
import { useParams } from "react-router-dom";
import "./singleproduction.css";
import Sidebar from "../../components/shared/Sidebar/Sidebar";

const SingleProduction = () => {
  const { id } = useParams();
  const newProduct = productions.find((item) => item.id === id);

  return (
    <div className="single-production-page">
      <div className="single-production-top"></div>
      <div className="single-production-content">
        <div className="single-production-left">
          {/* LEFT */}
          <div className="production-image-content">
            <img src={newProduct?.image} alt={newProduct?.title} />
            <h1>{newProduct?.title}</h1>
            <p>{newProduct?.text}</p>
          </div>
          {/* LEFT */}
        </div>
        <div className="single-production-right">
          <Sidebar />
        </div>
      </div>
      <div className="single-production-bottom"></div>
    </div>
  );
};

export default SingleProduction;
