import { useHistory } from "react-router-dom";

import NewItemForm from "../components/items/NewItemForm";

function NewItemPage() {
  const history = useHistory();

  function addItemHandler(itemData) {
    fetch(
      "https://first-react-app-fb656-default-rtdb.asia-southeast1.firebasedatabase.app/items.json",
      {
        method: "POST",
        body: JSON.stringify(itemData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/shop");
    });
  }

  return (
    <section>
      <h2>New Item</h2>
      <NewItemForm onAddItem={addItemHandler} />
    </section>
  );
}

export default NewItemPage;
