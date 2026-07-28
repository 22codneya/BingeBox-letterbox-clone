import { useState } from "react"
import useFetch from "../../hook/useFetchhook.jsx";
import MovieCard from "../components/MovieCard.jsx";

const Search = () => {
        const [genre, setGenre] =useState(null);

  const { movies, loading, error } = useFetch(genre?`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=en-US`:null);

  if (loading) {
    
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
<div className="container mx-auto px-6 py-8">
    <div>
       genre:
       <span className={`badge cursor-pointer ${genre === 28 ? "badge-primary" : "badge-outline"}`} onClick={()=>setGenre(28)}>Action</span>
       <span className={`badge cursor-pointer ${genre === 16 ? "badge-primary" : "badge-outline"}`} onClick={()=>setGenre(16)}>Animation</span>
       <span className={`badge cursor-pointer ${genre === 36 ? "badge-primary" : "badge-outline"}`} onClick={()=>setGenre(36)}>History</span>
       <span className={`badge cursor-pointer ${genre === 27 ? "badge-primary" : "badge-outline"}`} onClick={()=>setGenre(27)}>Horror</span>
       <span className={`badge cursor-pointer ${genre === 53 ? "badge-primary" : "badge-outline"}`} onClick={()=>setGenre(53)}>Thriller</span>
    </div>


  {genre?
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">

    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))}

  </div>
    :null
    }

    </div>
  )
}

export default Search