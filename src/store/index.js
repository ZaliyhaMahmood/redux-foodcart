import { createStore } from "redux";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  if (action.type === "toggle") {
    return {
      items: state.items,
      totalQuantity: state.totalQuantity,
      totalAmount: state.totalAmount,
    };
  }

  if (action.type === "addToCart") {
    const newItem = action.payload;
    const existingItem = state.items.find((item) => item.id === newItem.id);

    if (!existingItem) {
      return {
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + newItem.price,
        items: [...state.items, newItem],
      };
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      return {
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + newItem.price,
        items: [...state.items],
      };
    }
  }

  if (action.type === "removeFromCart") {
    const id = action.payload;
    const existingItem = state.items.find((item) => item.id === id);

    if (existingItem.quantity === 1) {
      return {
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - existingItem.price,
        items: state.items.filter((item) => item.id !== id),
      };
    } else {
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      return {
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - existingItem.price,
        items: [...state.items],
      };
    }
  }

  return state;
};

const store = createStore(cartReducer);

export default store;
