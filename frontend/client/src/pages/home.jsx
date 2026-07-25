import React from 'react'

const home = () => {
  return (
    <div>
     <Navbar />

  <HeroSection />

  <MovieSection
    title="🔥 Trending Movies"
    movies={trendingMovies}
  />

  <MovieSection
    title="⭐ Top Rated"
    movies={topRatedMovies}
  />

  <MovieSection
    title="🆕 New Releases"
    movies={newReleases}
  />

  <RecentReviews />

  <Footer />
    </div>
  )
}

export default home
