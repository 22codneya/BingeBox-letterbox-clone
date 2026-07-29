import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFilm,
  FaHeart,
  FaBookmark,
  FaStar,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="min-h-full w-62 bg-base-200 p-6">

      <h1 className="text-3xl font-bold text-primary mb-10">
         BingeBox
      </h1>

      <ul className="menu gap-6 ">

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

    </aside>
  );
};

export default Sidebar;