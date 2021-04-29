import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;
    const updatedTotalAmount = state.totalAmount + action.item.amount;
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems = [];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items].concat(action.item);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const itemIdx = state.items.findIndex(
      (product) => product.id === action.id
    );
    const item = state.items[itemIdx];
    const updatedTotalPrice = state.totalPrice - item.price;
    const updatedTotalAmount = state.totalAmount - 1;
    const updatedItems = [...state.items];
    let updatedItem;
    if (item.amount > 1) {
      updatedItem = { ...item, amount: item.amount - 1 };
      updatedItems[itemIdx] = updatedItem;
    } else {
      updatedItems.splice(itemIdx, 1);
    }
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "RESET_CART") {
    return defaultCartState;
  }
  return defaultCartState;
};

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item,
    });
  };
  const addMultipleItems = (item) => {
    dispatchCartAction({
      type: "ADD_MULTIPLE_ITEMS",
      item,
    });
  };

  const removeItem = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  };

  const reset = () => {
    dispatchCartAction({
      type: "RESET_CART",
    });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalAmount: cartState.totalAmount,
    addItem,
    addMultipleItems,
    removeItem,
    reset,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
