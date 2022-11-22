import { useSelector } from "react-redux";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CartSlider } from "./pages/CartSlider/CartSlider";
import { PagesRouters } from './routers/PagesRouters';

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible)
  return (
    <>
        <Header />
        {showCart && <CartSlider />}
        <PagesRouters />
        <Footer />
    </>

  );
}

export default App;
