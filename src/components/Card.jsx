import { useCartStore } from "../store/store";

const Card = ({ datos }) => {
  const { addToCart } = useCartStore();
  const cart = useCartStore((state) => state.cart);
  const { img, name, descripcion, precio } = datos;

  const ruta = `/images/flores/${img}`;
  const encontrado = cart.some((planta) => planta.name === name);
  console.log(cart);
  console.log(encontrado);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "1px solid blue",
          padding: "10px",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>{name}</h1>
        <h5
          style={{
            fontStyle: "italic",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {descripcion}
        </h5>
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          src={ruta}
          alt=""
        />
        <h4>{precio} $</h4>
        {
          <button
            onClick={() => addToCart(datos)}
            style={{
              backgroundColor: encontrado ? "red" : "green",
              color: "white",
            }}
          >
            Comprar
          </button>
        }
      </div>
    </>
  );
};

export default Card;
