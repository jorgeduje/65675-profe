import "./navbar.css";

import logo from "../../../assets/image-logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* <Link style={{ listStyle: "none" }}>Todas</Link> */}
        <Link style={{ listStyle: "none" }} to="/category/urbanas">
          Urbanas
        </Link>
        <Link style={{ listStyle: "none" }} to="/category/deportivas">
          Deportivas
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

// Navbar() --> <Navbar />

// export const sumar = ()=>{
//   return 15 + 15
// }

// sumar() ---> 30

// sumar() ---> 30
