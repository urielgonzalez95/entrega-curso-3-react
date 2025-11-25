import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="mt-3">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => count > 1 && setCount(count - 1)}
        >
          -
        </button>

        <span className="fs-4">{count}</span>

        <button
          className="btn btn-outline-success"
          onClick={() => count < stock && setCount(count + 1)}
        >
          +
        </button>
      </div>

      <button className="btn btn-primary mt-3 w-100">Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
