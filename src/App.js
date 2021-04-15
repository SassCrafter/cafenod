import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  const scrollHandler = (e) => {
    const scrolled = window.scrollY;
    console.log(scrolled);
  };

  return (
    <Router>
      <Header />
      <Route exact path={ROUTES.CONTACT}>
        <h1>Contact</h1>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
