import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount(); // ---> un numero
  return (
    <div>
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            style={{ border: "2px solid black", padding: "20px" }}
          >
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.quantity}</h2>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      <button onClick={removeCart}>Vaciar carrito</button>

      <h2>El total a pagar es : {total}</h2>
      {cart.length > 0 && <Link to="/checkout"> Finalizar compra </Link>}
    </div>
  );
};

export default Cart;

// const sumar = ()=>{
//   return  15
// }
// const sumar2 = (a, b, c )=>{
//   return  a+ b+c
// }

{
  /* <button onClick={sumar}> sumar </button>
<button onClick={ ()=> sumar2( 1, 5, 2 )  }> sumar </button> */
}
