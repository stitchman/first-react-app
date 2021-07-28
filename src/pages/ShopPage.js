import { useState, useEffect } from "react";

import ItemList from "../components/items/ItemList";

function ShopPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://first-react-app-fb656-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          items.unshift(item);
        }

        setIsLoading(false);
        setLoadedItems(items);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Shop</h2>
      <ItemList items={loadedItems} />
    </section>
  );
}

export default ShopPage;
