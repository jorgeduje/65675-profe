import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Aca van los productos</h2>
      <ProductCard
        titulo="titulo 1"
        precio="precio 1"
        description="descripcion 1"
      />
      <ProductCard
        titulo="titulo 2"
        precio="precio 2"
        description="descripcion 2"
      />
      <ProductCard
        titulo="titulo 3"
        precio="precio 3"
        description="descripcion 3"
      />
      <ProductCard
        titulo="titulo 4"
        precio="precio 4"
        description="descripcion 4"
      />
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
