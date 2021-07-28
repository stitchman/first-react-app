import { useRef } from "react";

import classes from "./NewItemForm.module.css";
import Card from "../ui/Card";

function NewItemForm(props) {
  const titleInputRef = useRef();
  const brandInputRef = useRef();
  const priceInputRef = useRef();
  const imgInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBrand = brandInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredImg = imgInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const itemData = {
      title: enteredTitle,
      brand: enteredBrand,
      price: enteredPrice,
      img: enteredImg,
      desc: enteredDesc,
    };

    props.onAddItem(itemData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="tltle">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="brand">Brand</label>
          <input type="text" required id="brand" ref={brandInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="img">Image</label>
          <input type="text" required id="img" ref={imgInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" required rows="5" ref={descInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  );
}

export default NewItemForm;
