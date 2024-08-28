import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <span>logify</span>
        </div>
        <div className="links">
          <Link className="link" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="link" to={"/?cat=science"}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to={"/?cat=technology"}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to={"/?cat=cimena"}>
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to={"/?cat=design"}>
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to={"/?cat=food"}>
            <h6>FOOD</h6>
          </Link>
          <span>John Doe</span>
          <span>Logout</span>
          <span className="write">
            <Link to={"/write"} className="link">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
