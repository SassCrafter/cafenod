import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { SameContent, Home, Checkout } from "./pages";
import CartProvider from "./store/cart/CartProvider";

function App() {
  const scrollHandler = (e) => {
    const scrolled = window.scrollY;
    console.log(scrolled);
  };

  return (
    <CartProvider>
      <Router>
        <SameContent />
        <Route exact path={ROUTES.CONTACT}>
          <h1>Contact</h1>
        </Route>
        <Route exact path={ROUTES.CHECKOUT}>
          <Checkout />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Router>
    </CartProvider>
  );
}

export default App;
