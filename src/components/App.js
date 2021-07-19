import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import food from "./Products/food";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import CartHeading from "./Cart/CartHeading";

const App = () => {
  const totalQuantity = useSelector((state) => state.totalQuantity);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.preventDefault();

  };

  useEffect(() => {
    const results = food.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-8">
          <Navbar searchTerm={searchTerm} handleChange={handleChange} />
          <Sidebar />
          <Products products={searchResults} />
        </div>
        <div className="col-lg-4">
          <CartHeading totalQuantity={totalQuantity} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
