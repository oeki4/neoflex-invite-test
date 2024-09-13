import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer.tsx";
import "../assets/scss/components/router.scss";

export default function Router() {
  return (
    <div className="router">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
