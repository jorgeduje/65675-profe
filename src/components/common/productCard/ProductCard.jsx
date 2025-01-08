export const ProductCard = (props) => {
  console.log(props);

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{props.titulo}</h2>
      <h2>{props.precio}</h2>
      <h2>{props.description} </h2>
    </div>
  );
};

// const sumar = (a, b, c )=>{

// }
// sumar( 1, 5, 7 )
// sumar( 3, 5, 7 )
// sumar( 5, 5, 7 )
// sumar( 4, 5, 7 )
