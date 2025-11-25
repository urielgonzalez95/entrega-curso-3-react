import Item from "./Item";

function ItemList({ items }) {
  return (
    <div className="row g-4">
      {items.map((prod) => (
        <div key={prod.id} className="col-md-4">
          <Item product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
