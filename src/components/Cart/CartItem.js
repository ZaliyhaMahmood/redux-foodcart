import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { name, img, quantity, total, price, id } = props.item;

  const addItemHandler = () => {
    dispatch({
      type: "addToCart",
      payload: { id, img, name, totalPrice: price, price: price, quantity: 1 },
    });
  };

  const removeItemHandler = () => {
    dispatch({
      type: "removeFromCart",
      payload: id,
    });
  };

  return (
    <CartCard>
      <div>
        <img className="cart-img" src={img} alt="food" />
      </div>
      <div>
        <Title>
          <i class="far fa-dot-circle "></i>
          <p>{name}</p>
        </Title>
        <ChangeBox>
          <SignBox onClick={removeItemHandler}>-</SignBox>
          <QuantityBox>{quantity}</QuantityBox>
          <SignBox onClick={addItemHandler}>+</SignBox>
        </ChangeBox>
      </div>
      <PriceBox>
        <p>${total.toFixed(2)}</p>
      </PriceBox>
    </CartCard>
  );
};

const CartCard = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
  justify-content: space-between;

  & img {
    height: 75px;
    width: 75px;
    margin-right: 20px;
  }

  & p {
    font-family: "Montserrat", sans-serif;
  }
`;

const Title = styled.div`
  display: flex;
  width: 130px;
  padding-top: 10px;

  & i {
    padding-right: 10px;
    color: green;
  }
`;

const ChangeBox = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SignBox = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eaf5fa;
  border: 1px solid #6ea8c0;
  margin: 0;
  font-size: 20px;
  color: #6ea8c0;
  text-align: center;
`;

const QuantityBox = styled.div`
  width: 30px;
  height: 30px;
  border-top: 1px solid #6ea8c0;
  border-bottom: 1px solid #6ea8c0;
  margin: 0;
  font-size: 20px;
  color: #6ea8c0;
  text-align: center;
`;

const PriceBox = styled.div`
  align-self: flex-start;
  margin-left: 110px;
  justify-content: space-around;

  & p {
    padding-bottom: 10px;
  }
`;

export default CartItem;
