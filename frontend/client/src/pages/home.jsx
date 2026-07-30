import MovieCarousel from "../components/MovieCarousel";
import HeroCarousel from "../pages/HeroCarousel";
import MovieRecommendation from "../components/movieRecommendation.jsx";
const Home = () => {
  return (
    <>
      <div className="w-full">
        
      </div>
      <>
  <HeroCarousel />

  <MovieCarousel
    title="Trending Today"
    url="https://api.themoviedb.org/3/trending/all/day?language=en-US"
  />

</>
      

         <MovieCarousel
        title="Trending TV Shows"
        url="https://api.themoviedb.org/3/trending/tv/day?language=en-US"
      />


      <MovieCarousel
        title="Top Rated Shows"
        url="https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200"
      />

      <MovieCarousel
        title="Upcoming Movies"
        url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
      />
      <MovieCarousel
        title="Top Rated Movies"
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
      />

      <MovieRecommendation/>

    </>
  );
};

export default Home;
