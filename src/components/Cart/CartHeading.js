import React from "react";
import styled from "styled-components";

const CartBar = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  height: 65px;
  padding-left: 150px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;

  & div {
    margin-left: 10px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #199ec4;
    text-align: center;
    color: white;
  }
`;

const CartHeading = (props) => {
  return (
    <CartBar>
      <h2>Cart</h2>
      <div>{props.totalQuantity}</div>
    </CartBar>
  );
};

export default CartHeading;
