import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const comprar = (evento) => {
    evento.preventDefault();

    // creemos una orden de compra en firestore
    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    // aca nos conectamos con firestore para guardar esa orden
    let ordersCollection = collection(db, "orders");
    const newOrder = addDoc(ordersCollection, order);
    newOrder.then((res) => {
      setTicketNumber(res.id);
      removeCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  const capturarDatos = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      {ticketNumber ? (
        <h1>tu comprobante es : {ticketNumber}</h1>
      ) : (
        <form onSubmit={comprar}>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={capturarDatos}
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={capturarDatos}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={capturarDatos}
          />
          <button>comprar</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
