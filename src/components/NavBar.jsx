import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useCartStore } from "../store/store";
import { useShallow } from "zustand/shallow";

const NavBar = () => {
  const cart = useCartStore(useShallow((state) => state.cart));

  return (
    <main
      style={{
        backgroundColor: "green",
        height: "10vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <section>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          {" "}
          Enrique Moreno{" "}
        </NavLink>
      </section>
      <section>
        <NavLink
          to="/main"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Plants
        </NavLink>
      </section>
      <section>
        <NavLink to="/cart" style={{ fontSize: "40px" }}>
          <CiShoppingCart style={{ color: "white" }} />
        </NavLink>
      </section>

      <span
        style={{
          color: "white",
          position: "absolute",
          marginLeft: "700px",
          marginTop: "-20px",
          fontSize: "15px",
          backgroundColor: "red",
          padding: "3px",
          borderRadius: "50%",
          textAlign: "center",
          width: "16px",
        }}
      >
        {cart.length}
      </span>
    </main>
  );
};

export default NavBar;
