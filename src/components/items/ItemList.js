import classes from "./ItemList.module.css";
import Item from "./Item";

function ItemList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            brand={item.brand}
            price={item.price}
            desc={item.desc}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;
