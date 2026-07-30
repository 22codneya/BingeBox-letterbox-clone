import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useauthStore.js";
import {
  FaHome,
  FaFilm,
  FaHeart,
  FaBookmark,
  FaStar,
  FaUser
} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
    const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <aside className="min-h-full w-40 bg-base-200 p-6  border-r border-base-content/20 flex flex-col p-6">


      <ul className="menu gap-9 flex-1">

        <li>
          <NavLink to="/"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaHome />
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaFilm />
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink to="/favorites"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaHeart />
            Favorites
          </NavLink>
        </li>

        <li>
          <NavLink to="/watchlist"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaBookmark />
            Watchlist
          </NavLink>
        </li>

        <li>
          <NavLink to="/reviews"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaStar />
            Reviews
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile"
  className={({ isActive }) =>
    isActive
      ? "bg-primary text-primary-content rounded-lg"
      : ""
  }
>
            <FaUser />
            Profile
          </NavLink>
        </li>

      </ul>
      <div className="border-t border-base-content/10 pt-4">
  <button
    onClick={handleLogout}
    className="btn btn-error btn-outline w-full"
  >
    <FaSignOutAlt />
    Logout
  </button>
</div>

    </aside>
  );
};

export default Sidebar;