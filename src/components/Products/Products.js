import React from "react";
import styled from "styled-components";

import FoodItem from ".//FoodItem";

const Products = (props) => {
  const Main = styled.div`
    height: 650px;
    padding: 20px;
    padding-left: 80px;
    overflow: auto;
    background-color: #f5f6f8;
    font-size: 15px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  `;

  return (
    <div className="container">
      <Main className="row">
        {props.products.map((foodItem, index) => (
          <div className="col-lg-4 col-md-6">
            <FoodItem
              key={foodItem.id}
              img={foodItem.img}
              name={foodItem.name}
              price={foodItem.price}
              // onAdd={addItem}
              id={index}
            />
          </div>
        ))}
      </Main>
    </div>
  );
};

export default Products;
