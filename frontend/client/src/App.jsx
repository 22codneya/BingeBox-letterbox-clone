import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Layout from "./layout/layout.jsx";
import MovieDetails from "./pages/movieDetails.jsx";
import Profile from "./pages/profile.jsx";
import Movies from "./pages/Movies.jsx";
import Reviews from "./pages/Reviews.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
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
