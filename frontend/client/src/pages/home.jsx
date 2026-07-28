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
      <MovieCarousel />
    </>
  );
};

export default Home;
