import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const FoodItem = (props) => {
  const dispatch = useDispatch();

  const { name, price, img, id } = props;

  const addToCartHandler = () => {
    dispatch({
      type: "addToCart",
      payload: { id, img, name, totalPrice: price, price: price, quantity: 1 },
    });
  };

  return (
    <div onClick={addToCartHandler}>
      <ImgContainer>
        <img className="img" src={img} alt="food" />
        <i class="fas fa-check-circle fa-2x img-icon"></i>
      </ImgContainer>

      <Title>
        <i class="far fa-dot-circle "></i>
        <p>{name}</p>
      </Title>

      <p>
        <b>${price.toFixed(2)}</b>
      </p>
    </div>
  );
};

export default FoodItem;

const ImgContainer = styled.div`
  position: relative;
  justify-content: center;

  & img {
    border-radius: 5px;
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
  }

  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    visibility: hidden;
  }
`;

const Title = styled.div`
  display: flex;
  width: 130px;

  & i {
    padding-right: 10px;
    color: green;
  }
  & p {
    font-family: "Montserrat", sans-serif;
  }
`;
