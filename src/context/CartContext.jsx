import { createContext, useState } from "react";

// crear el contexto
export const CartContext = createContext();

// crear el componente proveedor
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [] ---> [ {} ] ---> [{}, {}] ---> [ {} {} --> {}]

  const addToCart = (product) => {
    // antes de agregar un producto
    // primero verifico si ya esta en el carrito
    let isInCart = cart.some((elemento) => elemento.id === product.id);
    if (isInCart) {
      // hago algo
      alert("ya esta agregado");
      // encontrar ese producto aumentarle las cantidades  y modificar el estado cart
    } else {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    let nuevoArray = cart.filter((elemento) => elemento.id !== id);
    setCart(nuevoArray);
  };

  const getTotalAmount = () => {
    // let acc = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   acc += cart[i].price * cart[i].quantity;
    // }
    // return acc;

    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeCart,
    removeById,
    getTotalAmount,
    getTotalItems,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

{
  /* <CartContextProvider>
  <Home />
  <Cart />
  <Detalle />
</CartContextProvider>; */
}
// let isInCart = cart.filter((elemento) => elemento.id === product.id);
// // [] es vacio --_> no esta
// // [{}] es por que si esta
// let isInCart2 = cart.find((elemento) => elemento.id === product.id);
// // undefined  --_> no esta
// // {} es por que si esta
