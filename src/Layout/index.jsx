import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full h-full">
      <Header />
      <section className="w-full h-full lg:px-20 ">
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
