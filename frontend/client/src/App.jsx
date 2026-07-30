import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";
import Reviews from "./pages/Reviews";
import Watchlist from "./pages/Watchlist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PublicRoute from "./components/PublicRoute";
import Search from "./pages/Search.jsx";
import Favorites from "./pages/Favorites.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={ <PublicRoute> <Signup />  </PublicRoute> }/>

      <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute>}/>

      {/* Protected Routes */}
      <Route path="/" element={ <ProtectedRoute> <Layout /> </ProtectedRoute>}>
        <Route index element={<Home />} />
        <Route path="/details/:type/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default App;
