import { Button } from "@mui/material";
export const ProductCard = ({ imageUrl, title, price, description }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{description}</h2>
      <Button color="success" variant="contained" loading={true}>
        Ver detalle
      </Button>

      <button className="bg-red mt-2 font-2rem "></button>
    </div>
  );
};
