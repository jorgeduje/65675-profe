import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../../context/CartContext";

// 12
export const Counter = ({ item }) => {
  const [contador, setContador] = useState(1); // --> []
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...item, quantity: contador };

    addToCart(objetoParaElCarrito);
  };

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>contador: {contador} </h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={onAdd}>Agregar al carrito </button>
    </div>
  );
};
