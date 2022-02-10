import React from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "../Navigation/Navigation";
import ReactPaginate from "react-paginate";
import "./ShoppingPage.css";
import Modal from "./Modal";

function Shopping() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [categoryArray, setCategoryArray] = useState(location.categories);
  const [modal, setModal] = useState(false);
  // const [userPreferences, setUserPreferences] = useState([]);
  const id = location.id;
  const email = location.email;
  const productPerPage = 8;
  const productVisited = productPerPage * pageNumber;

  const onSearchChange = (event) => {
    setPageNumber(0);
    setSearchField(event.target.value);
  };

  const openModal = () => {
    setModal(true);
  };

  useEffect(() => {
    console.log(id);
    fetch("https://61f3a5d810f0f7001768c544.mockapi.io/Products")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setProducts(users);
      });
  }, []);

  const preferedProducts = products.filter((product) => {
    return categoryArray.includes(product.category);
  });

  const filterProducts = preferedProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  const displayProducts = filterProducts.slice(
    productVisited,
    productVisited + productPerPage
  );

  console.log(filterProducts);
  console.log(categoryArray);

  const pageCount = Math.ceil(filterProducts.length / productPerPage);

  const pageChange = ({ selected }) => setPageNumber(selected);

  // console.log(modal);

  return (
    <div>
      {modal && (
        <Modal
          setOpenModal={setModal}
          categoryValue={categoryArray}
          setCategoryValue={setCategoryArray}
          id={id}
          email={email}
          setPage={setPageNumber}
        />
      )}
      <Navigation openModal={openModal} searchChange={onSearchChange} />
      {!products.length ? (
        <h1 style={{ fontFamily: "monospace" }}>Loading</h1>
      ) : (
        <div>
          {/* <Navigation openModal={openModal} searchChange={onSearchChange} /> */}
          <div className="tc mt4">
            <CardList products={displayProducts}></CardList>
          </div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={pageChange}
            containerClassName={"paginationBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      )}
      <center>
        <p class="footer-description" style={{ marginTop: "80px" }}>
          ©Ratan Kumar
        </p>
      </center>
    </div>
  );
}
export default Shopping;
