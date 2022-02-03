import { Link } from "react-router-dom";

const Navigation = ({ openModal }) => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        {/* <Link to="/preference"> */}
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={openModal}
        >
          Preferences
        </p>
        {/* </Link> */}
        <Link to="/">
          <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </Link>
      </nav>
      <h1
        className="d-flex justify-content-center mt-5 text-primary mb-4"
        style={{ fontFamily: "monospace" }}
      >
        <em>Lets Shop</em>
      </h1>
    </div>
  );
};

export default Navigation;
