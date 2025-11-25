import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="card p-4 shadow">
      <div className="row">
        <div className="col-md-6">
          <img src={item.img} className="img-fluid rounded" alt={item.title} />
        </div>

        <div className="col-md-6">
          <h2>{item.title}</h2>
          <p className="text-muted">Categoría: {item.category}</p>
          <h3 className="text-success">Precio: ${item.price}</h3>

          <ItemCount stock={10} initial={1} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
