import { useState, useEffect } from "react";
import "./counter.css";

// 12
export const Counter = () => {
  const [contador, setContador] = useState(1); // --> []
  const [isDark, setIsDark] = useState(false);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const cambiarModo = () => {
    setIsDark(!isDark);
  };
  console.log(
    "Se hace una peticion a un servidor en la india FUERA DEL EFFECT"
  );

  useEffect(() => {
    console.log("Se hace una peticion a un servidor en la india");
  }, [isDark]); // array de depencias

  return (
    <div className={isDark ? "dark" : "normal"}>
      <button onClick={restar}>Restar</button>
      <h2>contador: {contador} </h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={cambiarModo}>cambiar</button>
    </div>
  );
};
