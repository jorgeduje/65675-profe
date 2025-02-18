import { useEffect, useState } from "react";
// import { products } from "../../../products";
import { useParams } from "react-router";
import { Counter } from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct
      .then((res) => setItem({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
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
