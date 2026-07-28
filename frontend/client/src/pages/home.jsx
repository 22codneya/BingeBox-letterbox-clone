import MovieCarousel from "../components/MovieCarousel";
const Home = () => {
  return (
    <>
      <div className="py-24">
        {/* Hero */}
        <div className="hero min-h-[60vh] bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold">Welcome to BingeBox</h1>

              <p className="py-6 text-lg">
                Discover trending movies, explore classics, and build your own
                watchlist.
              </p>

              {/* hero finish */}
            </div>
          </div>
        </div>
      </div>
      <MovieCarousel  title="Trending Today"
        url="https://api.themoviedb.org/3/trending/all/day?language=en-US"/>

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

    </>
  );
};

export default Home;
