import Productions from "../../components/HomeComponents/Productions/Productions";
import TopSlider from "../../components/HomeComponents/TopSlider/TopSlider";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopSlider />
      <Productions />
    </div>
  );
};

export default Homepage;
