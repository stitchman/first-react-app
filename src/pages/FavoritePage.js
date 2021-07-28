import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import ItemList from "../components/items/ItemList";

function FavoritePage() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h2>My Favorites</h2>
      <ItemList items={favoritesCtx.favorites} />
    </section>
  );
}

export default FavoritePage;
