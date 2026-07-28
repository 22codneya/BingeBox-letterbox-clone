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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movieDetails" element={<MovieDetails />} />
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/login' element={ <PublicRoute> <Login/> </PublicRoute> }/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/favorites" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default App;