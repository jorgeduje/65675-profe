import { Counter } from "./components/common/counter/Counter";
import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      {/* <Counter /> */}
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
