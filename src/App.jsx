import { Navbar } from "./Navbar";

function App() {
  const sumar = () => {
    console.log("estoy sumando");
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>principal</h2>
      </main>

      <button onClick={sumar}>sumar</button>
      <footer>footer</footer>
    </div>
  );
}

export default App;
