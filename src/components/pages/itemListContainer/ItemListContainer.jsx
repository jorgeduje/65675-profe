import { useState } from "react";
import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  // simular una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    // let productsFiltered;
    // if (name) {
    //   productsFiltered = products.filter(
    //     (elemento) => elemento.category === name
    //   );
    // }
    let productsFiltered = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(!name ? products : productsFiltered);
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
  }, [name]);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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
            id={elemento.id}
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
