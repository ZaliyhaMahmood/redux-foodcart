import React from "react";
import styled from "styled-components";

const ItemTotal = (props) => {
  const Total = styled.div`
    display: flex;
    background-color: #eaf5fa;
    margin: 20px;
    padding: 20px 20px 0;
    justify-content: space-between;
  `;

  return (
    <Total>
      <p>Item Total</p>
      <p>
        <b>${props.total.toFixed(2)}</b>
      </p>
    </Total>
  );
};

export default ItemTotal;
