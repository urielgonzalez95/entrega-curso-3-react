import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="card">
      <img src={product.img} className="card-img-top" alt={product.title} />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fw-bold">Precio: ${product.price}</p>

        <Link className="btn btn-primary w-100" to={`/item/${product.id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
}

export default Item;
