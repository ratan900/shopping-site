import { Link } from "react-router-dom";
import SearchBox from "../ShoppingPage/SearchBox";
import "./Navigation.css";

const Navigation = ({ openModal, searchChange }) => {
  return (
    <div>
      <nav
        // className="mobileApp"
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <h1
          // className="head"
          className="d-flex text-primary"
          style={{
            fontFamily: "monospace",
            fontSize: "16px",
            marginTop: "35px",
            // marginLeft: "10px",
          }}
        >
          Shop
        </h1>
        <SearchBox searchChange={searchChange} />
        <div class="dropdown phoneView">
          <button class="dropbtn">Menu</button>
          <div class="dropdown-content">
            <p className="pa3 pointer" onClick={openModal}>
              Preferences
            </p>
            {/* </Link> */}
            <Link to="/">
              <p className="pointer">SignOut</p>
            </Link>
          </div>
        </div>
        <div className="ma1 buttons">
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
        </div>
        {/* <p className="f3 link dim black underline pa3 pointer option">
          Options
        </p> */}
      </nav>
    </div>
  );
};

export default Navigation;
