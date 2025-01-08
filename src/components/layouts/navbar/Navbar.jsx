import "./navbar.css";

import logo from "../../../assets/image-logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={logo} alt="" />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <li style={{ listStyle: "none" }}>Todas</li>
        <li style={{ listStyle: "none" }}>Urbanas</li>
        <li style={{ listStyle: "none" }}>Deportivas</li>
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
