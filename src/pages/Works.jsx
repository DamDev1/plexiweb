import "../css/Work.css";
import { Link } from "react-router-dom";
import workData from "../utils/Work";
const Works = () => {
  return (
    <section id="work-container">
      <div className="work-hero">
        <h1>Our work</h1>
        <p>
          We've helped 100+ small businesses around the world transform their
          brand image through award-winning design.
        </p>
        <div className="work-hero-link">
          <Link>View More</Link>
        </div>
      </div>
    </section>
  );
};

export default Works;
