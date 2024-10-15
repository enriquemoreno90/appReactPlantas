import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "90vh",
        }}
      >
        <img
          style={{ position: "relative", width: "100%", opacity: "80%" }}
          src="https://blog-escocia.com/wp-content/uploads/2023/01/escocia-highlands-ruta-1024x577.jpg"
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            color: "white",
            justifyContent: "center",
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "50px" }}>Flower Project</h1>
            <h4 style={{ marginTop: "-40px", marginBottom: "40px" }}>
              by Enrique Moreno González
            </h4>
            <Link
              to="/main"
              style={{
                backgroundColor: "blueviolet",
                fontSize: "20px",
                textDecoration: "none",
                padding: "10px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Get Started
            </Link>
          </section>
        </div>
      </main>

      <Outlet />
    </>
  );
}

export default LandingPage;
