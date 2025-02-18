import { useState } from "react";
// import { products } from "../../../products";
import { ProductCard } from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  // simular una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      let porcionDeLaColeccion = query(
        productsCollection,
        where("category", "==", name)
      );
      consulta = porcionDeLaColeccion;
    }

    const getProducts = getDocs(consulta);
    getProducts
      .then((res) => {
        const array = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // const agregarProductos = () => {
  //   let productsCollection = collection(db, "products");

  //   products.forEach((elemento) => {
  //     addDoc(productsCollection, elemento);
  //   });
  // };
  // if con return temprano
  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <h2>cargando..</h2>
  //     </div>
  //   );
  // }
  return (
    <>
      {/* <button onClick={agregarProductos}>Agregar productos </button> */}
      <h1>Aca mis productos</h1>
      {items.length === 0 ? (
        <h1>cargando..</h1>
      ) : (
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
      )}
    </>
  );
};

export default ItemListContainer;

// const sumar = ( a, b )=>{
//   return a + b
// }

// sumar(1 , 2) --> 3
// sumar(5, 15) --> 20
// sumar(10, 7 ) --> 17
