import { useCartStore } from "../store/store";
import ShoppingCard from "../components/ShoppingCard";
import NavBar from "../components/NavBar";

const ShopingCart = () => {
  const store = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Total:{totalPrice} $ </h1>
      <main
        style={{
          display: "flex",
          border: "solid 1px",
          margin: "auto",
          width: "70vh",

          marginTop: "10vh",
          textAlign: "center",
        }}
      >
        <section style={{ width: "100%" }}>
          {store.map((product, i) => {
            return <ShoppingCard key={i} product={product} />;
          })}
        </section>
      </main>
    </>
  );
};

export default ShopingCart;
