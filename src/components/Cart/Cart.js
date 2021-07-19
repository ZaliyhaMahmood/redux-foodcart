import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import ItemTotal from "./ItemTotal";

const Cart = () => {
  const CartContent = styled.div`
    height: 650px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    align-items: flex-start;
  `;

  const CartItems = styled.div`
    height: 400px;
    overflow: auto;
  `;

  const cartItems = useSelector((state) => state.items);
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.totalAmount);

  if (totalQuantity === 0) {
    return <EmptyCart />;
  } else {
    return (
      <CartContent>
        <CartItems>
          {cartItems.map((item, index) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                img: item.img,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </CartItems>

        <ItemTotal total={totalAmount} />
      </CartContent>
    );
  }
};

export default Cart;
