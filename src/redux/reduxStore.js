import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartFromStorage = () => {
  try {
    if (typeof window === "undefined") return undefined;

    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : undefined;
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCartFromStorage(),
  },
});

store.subscribe(() => {      //// اى تغيير حيحصل فى الstore ده حيتنفذ
  try {
    localStorage.setItem(
      "cart",
      JSON.stringify(store.getState().cart)
    );
  } catch {}
});