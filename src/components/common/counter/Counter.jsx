import { useState } from "react";
import "./counter.css";
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

  return (
    <div className={isDark ? "dark" : "normal"}>
      <button onClick={restar}>Restar</button>
      <h2>contador: {contador} </h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={cambiarModo}>cambiar</button>
    </div>
  );
};
