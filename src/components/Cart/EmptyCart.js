import React from "react";
import styled from "styled-components";

const Emptycart = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;

  & img {
    height: 100px;
    width: 100px;
    margin: 50px 150px 10px;
  }
`;

const EmptyCart = () => {
  return (
    <Emptycart>
      <img src="https://img.icons8.com/cute-clipart/64/4a90e2/meal.png" />
      <p>
        <b>Your cart is empty</b>
      </p>
      <p>Please add some items from the menu</p>
    </Emptycart>
  );
};

export default EmptyCart;
