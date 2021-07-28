import { useContext } from "react";

import classes from "./Item.module.css";
import Card from "../ui/Card";

import FavoritesContext from "../../store/favorites-context";

function Item(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        brand: props.brand,
        price: props.price,
        img: props.img,
        desc: props.desc,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <span>{props.brand}</span>
          <span>{props.price}</span>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default Item;
