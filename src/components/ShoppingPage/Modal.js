import "./Modal.css";
import { Button } from "react-bootstrap";
import { categories } from "../PreferencePage/categories";
import "./styles.css";
import { useState } from "react";

function Modal({ setOpenModal, categoryValue, setCategoryValue, id, email }) {
  const [newCategories, setNewCategories] = useState([]);
  const checkedList = categories.map((item, index) => {
    if (categoryValue.includes(item)) return true;
    else return false;
  });
  console.log(checkedList);
  const handleOnChange = (position) => {
    checkedList.map((item, index) => {
      if (checkedList[position] === false) {
        checkedList[position] = true;
      } else {
        checkedList[position] = false;
      }
    });
    console.log("newCategoryunderhandle", newCategories);
  };

  const setDiff = (e) => {
    newCategories.length = 0;
    checkedList.map((item, index) => {
      if (checkedList[index] === true) {
        newCategories.push(categories[index]);
      }
    });
    console.log("newCategoryUnderSubmit", newCategories);
    fetch(`https://61f3a5d810f0f7001768c544.mockapi.io/Preferences/${id}`, {
      method: "PUT",
      // Adding body or contents to send
      body: JSON.stringify({
        preference: newCategories,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setCategoryValue(newCategories);
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>
          {/* <p>Select your Category</p> */}
          <h2 className="text-center mb-4">Select your Categories</h2>
        </div>
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
                      // checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                      defaultChecked={checkedList[index]}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{val}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Button
          className="w-100 mt-3 actions mt-4"
          type="submit"
          onClick={setDiff}
        >
          Save
        </Button>
        {/* </Form> */}
      </div>
    </div>
  );
}

export default Modal;
