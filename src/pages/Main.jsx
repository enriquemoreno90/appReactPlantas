import NavBar from "../components/NavBar";
import { useCartStore } from "../store/store";
import Card from "../components/Card";

function MainPage() {
  const data = useCartStore((state) => state.data);
  console.log(data);
  return (
    <>
      <NavBar />
      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridAutoFlow: "dense",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          marginTop: "1rem",
        }}
      >
        {data?.map((datos, index) => {
          return <Card key={index} datos={datos} />;
        })}
      </section>
    </>
  );
}

export default MainPage;
