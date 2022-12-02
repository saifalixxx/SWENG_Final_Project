import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="title">Productivity Metrics</span>
      </div>
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <span>Main Project</span>
            </li>
          </Link>
          <h2 className="subheading">Recent Contributors</h2>
          <Link to="/user1" style={{ textDecoration: "none" }}>
            <li>
              <span>berinaniesh</span>
            </li>
          </Link>
          <Link to="/user3" style={{ textDecoration: "none" }}>
            <li>
              <span>digisomni</span>
            </li>
          </Link>
          <Link to="/user4" style={{ textDecoration: "none" }}>
            <li>
              <span>namark</span>
            </li>
          </Link>
          <a href="https://wheelofnames.com/5qy-jf5" style={{ textDecoration: "none" }}>
            <li>
              <span style={{ color: 'pink' }}>*A Surprise*</span>
            </li>
          </a>
          <h2 className="subheading">About</h2>
          <Link to="/AboutUs" style={{ textDecoration: "none" }}>
            <li>
              <span>About Us</span>
            </li>
          </Link>
          <Link to="/AboutMetrics" style={{ textDecoration: "none" }}>
            <li>
              <span>About Metrics</span>
            </li>
          </Link>
          <Link to="/AboutRepo" style={{ textDecoration: "none" }}>
            <li>
              <span>About Repo</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;