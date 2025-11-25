import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts, getProductsByCategory } from "../data/products";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then(setItems);
    } else {
      getProducts().then(setItems);
    }
  }, [categoryId]);

  return (
    <>
      <h2 className="mb-4">
        {categoryId ? `Categoría: ${categoryId}` : "Productos"}
      </h2>

      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
