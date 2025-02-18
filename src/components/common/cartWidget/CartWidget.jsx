import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext); //
  let total = getTotalItems();
  return (
    <div>
      <Link to="/cart">
        <FaCartShopping />
        <div>
          <h2>{total}</h2>
        </div>
      </Link>
    </div>
  );
};
