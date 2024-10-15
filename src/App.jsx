import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/Landing.jsx";
import MainPage from "./pages/Main.jsx";

import Layout from "./layout/Layout.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import ShopingCart from "./pages/ShopingCart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>

      <Route path="/cart" element={<ShopingCart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
