import { Route, Switch } from "react-router-dom";

import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NewItemPage from "./pages/NewItemPage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AboutPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/favorite">
          <FavoritePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/newitem">
          <NewItemPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
