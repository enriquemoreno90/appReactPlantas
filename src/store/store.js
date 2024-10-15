import { create } from "zustand";
import data from "../data/db";
export const useCartStore = create((set) => ({
  data: data,
  cart: [],
  totalPrice: 0,
  addToCart: (plant) =>
    set((state) => {
      const plantInCart = state.cart.find((item) => item.name === plant.name);
      const newTotal = state.totalPrice + plant.precio;
      if (!plantInCart) {
        const updateCart = [
          ...state.cart,
          { ...plant, quantity: plant.quantity + 1 },
        ];
        return { cart: updateCart, totalPrice: newTotal };
      }
    }),
  removeFromCart: (productName) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.name !== productName),
    })),
  increaseQuantity: (item) =>
    set((state) => {
      const updatedCart = state.cart.map(
        (cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Incrementa la cantidad
            : cartItem // Retorna el item sin cambios
      );

      // Actualiza cart y totalPrice en una sola línea
      return { cart: updatedCart, totalPrice: state.totalPrice + item.precio };
    }),
  clearCart: () => set({ cart: [] }),
}));
