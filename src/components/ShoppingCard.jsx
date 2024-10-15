import { useCartStore } from "../store/store.js";

function ShoppingCard({ product }) {
  const url = `/images/flores/${product.img}`;
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return (
    <main
      style={{
        display: "flex",
        border: "solid 1px",

        justifyContent: "space-evenly",

        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",

          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100px",
            border: "solid, 1px,red",
            height: "100px",
          }}
          src={url}
          alt=""
        />
      </div>
      <div style={{ width: "100%" }}>
        <h2 style={{ margin: "0" }}>{product.name}</h2>
        <h3>{product.precio} $</h3>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => increaseQuantity(product)}>+</button>
          <span>{product.quantity}</span>
          <button>-</button>
        </div>
        <button
          onClick={() => remove(product.name)}
          style={{
            backgroundColor: "red",
            margin: "auto",
            width: "100%",
            color: "white",
            cursor: "pointer",
          }}
        >
          Borrar
        </button>
      </div>
    </main>
  );
}

export default ShoppingCard;
