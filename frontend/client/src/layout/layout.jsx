import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Layout = () => {
  return (
    <div className="drawer lg:drawer-open bg-base-300">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 bg-base-300">
          <Outlet />
        </main>

        <Footer />
      </div>

      <div className="drawer-side">
        <label
          htmlFor="sidebar-drawer"
          className="drawer-overlay"
        ></label>

        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;