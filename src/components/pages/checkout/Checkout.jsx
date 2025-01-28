import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const comprar = (evento) => {
    evento.preventDefault();
    console.log(userInfo);
  };
  const capturarDatos = (evento) => {
    // console.log(evento); // evento.target.value --> 88 & evento.target.name --> "telefono"
    const { value, name } = evento.target;
    // console.log(value, name);
    setUserInfo({ ...userInfo, [name]: value });
  };

  //   const persona = {
  //     name: "pepe",
  //     edad: 40,
  //   };
  //   console.log(persona.edad);
  //   console.log(persona["edad"]);

  return (
    <div>
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
    </div>
  );
};

export default Checkout;
