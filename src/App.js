import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { SameContent, Home, Checkout } from "./pages";
import CartProvider from "./store/cart/CartProvider";
import ScrollToTop from "./hoc/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const scrollHandler = (e) => {
    const scrolled = window.scrollY;
    console.log(scrolled);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop>
          <SameContent>
            <Route exact path={ROUTES.CONTACT}>
              <h1>Contact</h1>
            </Route>
            <Route exact path={ROUTES.CHECKOUT}>
              <Checkout />
            </Route>
            <Route exact path={ROUTES.HOME}>
              <Home />
            </Route>
          </SameContent>
        </ScrollToTop>
      </Router>
    </CartProvider>
  );
}

export default App;
