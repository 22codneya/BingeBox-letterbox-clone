import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 p-6">
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