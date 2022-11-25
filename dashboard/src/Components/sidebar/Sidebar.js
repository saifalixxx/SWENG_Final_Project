import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="title">Productivity Metrics</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <Link  to="/" style={{textDecoration: "none"}}>
            <li>
              <span>Main Project</span>
            </li>
          </Link>
          <p className="title">Top 5 Users</p>
          <Link  to="/user1" style={{textDecoration: "none"}}>
            <li>
              <span>User 1</span>
            </li>
          </Link>
          <Link  to="/user2" style={{textDecoration: "none"}}>
            <li>
              <span>User 2</span>
            </li>
          </Link>
          <Link  to="/user3" style={{textDecoration: "none"}}>
            <li>
              <span>User 3</span>
            </li>
          </Link>
          <Link  to="/user4" style={{textDecoration: "none"}}>
            <li>
              <span>User 4</span>
            </li>
          </Link>
          <Link  to="/user5" style={{textDecoration: "none"}}>
            <li>
              <span>User 5</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;