import { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { categories } from "./categories";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import "./Preference.css";

function Preference() {
  const history = useHistory();
  const location = useLocation();
  const [checkedState, setCheckedState] = useState([]);
  const handleOnChange = (position) => {
    checkedState.push(categories[position]);
  };

  const email_id = location.email;

  function submitHandeler(e) {
    console.log(checkedState);
    e.preventDefault();
    try {
      fetch("https://61f3a5d810f0f7001768c544.mockapi.io/Preferences", {
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          email: email_id,
          preference: checkedState,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          history.push({
            pathname: "/shopping",
            categories: checkedState,
            email: email_id,
            id: data.id,
          });
        });
    } catch {
      console.log("error");
    }
  }

  return (
    <div>
      <h1
        className="d-flex justify-content-center mt-5"
        style={{ fontFamily: "monospace" }}
      >
        <em>Shop On Shopping App</em>
      </h1>
      <center>
        <div className="w-100 mt-4 card" style={{ maxWidth: "500px" }}>
          <div>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Select your Categories</h2>
                <ul className="topping list">
                  {categories.map((val, index) => {
                    return (
                      <li key={index}>
                        {console.log(val, index)}
                        <div className="toppings-list-item">
                          <div className="left-section">
                            <input
                              type="checkbox"
                              id={`custom-checkbox-${index}`}
                              name={val}
                              value={val}
                              checked={checkedState[index]}
                              onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>
                              {val}
                            </label>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  className="w-100 mt-3 actions"
                  type="submit"
                  onClick={submitHandeler}
                >
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Preference;
