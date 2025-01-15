import { useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect } from "react";

const ItemListContainer = () => {
  // simular una peticion que me devuelva los productos
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("soy el effect");
    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(products);
      } else {
        reject({ statusCode: 400, message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  console.log("no soy el effect");
  return (
    <div>
      <h2>Aca van los productos</h2>

      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            imageUrl={elemento.imageUrl}
            title={elemento.title}
            price={elemento.price}
            description={elemento.description}
            stock={elemento.stock}
            category={elemento.category}
            // {...elemento}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;

// const sumar = ( a, b )=>{
//   return a + b
// }

// sumar(1 , 2) --> 3
// sumar(5, 15) --> 20
// sumar(10, 7 ) --> 17
