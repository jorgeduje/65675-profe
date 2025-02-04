import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { Counter } from "../../common/counter/Counter";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams(); // ---> {} ---> { id: 1 }

  // let id = "3";

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);

  return (
    <div>
      <img src={item.imageUrl} alt="" />
      <h2>{item.title}</h2>
      <h2>{item.price}</h2>
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;
