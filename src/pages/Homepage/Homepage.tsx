import Battle from "../../components/HomeComponents/Battle/Battle";
import Feedback from "../../components/HomeComponents/Feedback/Feedback";
import HomepageBlog from "../../components/HomeComponents/HomepageBlog/HomepageBlog";
import Productions from "../../components/HomeComponents/Productions/Productions";
import TopSlider from "../../components/HomeComponents/TopSlider/TopSlider";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <TopSlider />
      <Productions />
      <Battle />
      <HomepageBlog />
      <Feedback />
    </div>
  );
};

export default Homepage;
