import { getUserWatchedMovies } from "../repositories/movieWatchedRepo.js";

const API = process.env.API_URL;
const TOKEN = process.env.TMDB_TOKEN;

const genres = [
  {
    name: "Action",
    id: 28,
  },
  {
    name: "Adventure",
    id: 12,
  },
  {
    name: "Animation",
    id: 16,
  },
  {
    name: "Comedy",
    id: 35,
  },
  {
    name: "Crime",
    id: 80,
  },
  {
    name: "Drama",
    id: 18,
  },
  {
    name: "Horror",
    id: 27,
  },
  {
    name: "Romance",
    id: 10749,
  },
  {
    name: "Sci-Fi",
    id: 878,
  },
  {
    name: "Thriller",
    id: 53,
  },
];

const getRandomGenre = () => {
  const index = Math.floor(Math.random() * genres.length);

  return genres[index];
};

// export const generateMovieRecommendation = async ({
//   userId,
//   genre,
//   random,
// }) => {

//   const watchedMovies = await getUserWatchedMovies(userId);

//   const watchedIds = watchedMovies.map((movie) => movie.movieId);

//   let selectedGenre;

//   if (random) {
//     selectedGenre = getRandomGenre();
//   } else {
//     selectedGenre = genres.find((item) => item.id === Number(genre));
//   }

//   if (!selectedGenre) {
//     throw new Error("Invalid genre");
//   }

// const tmdbResponse = await fetch(
//   `${API}/discover/movie?with_genres=${selectedGenre.id}&sort_by=popularity.desc`,
//   {
//     headers:{
//       Authorization:`Bearer ${TOKEN}`,
//       "Content-Type":"application/json"
//     }
//   }
// );

//   if (!tmdbResponse.ok) {
//     throw new Error("TMDB request failed");
//   }

//   const tmdbData = await tmdbResponse.json();

//   const availableMovies = tmdbData.results.filter(
//     (movie) => !watchedIds.includes(movie.id),
//   );

//   if (availableMovies.length === 0) {
//     throw new Error("No new movies available");
//   }

//   const candidates = availableMovies.slice(0, 10).map((movie) => ({
//     id: movie.id,
//     title: movie.title,
//     overview: movie.overview,
//     rating: movie.vote_average,
//     genre: selectedGenre.name,
//     poster: movie.poster_path,
//   }));

//   const prompt = `

// You are a movie recommendation AI.

// Select ONLY ONE movie from the candidates.

// User wants a ${selectedGenre.name} movie.

// Choose the movie that matches best.

// Return ONLY valid JSON:

// {
// "title":"",
// "movieId":"",
// "reason":"",
// "genre":"",
// "rating":"",
// "whyItMatchesUser":""
// }


// Candidates:

// ${JSON.stringify(candidates)}

// `;

//   const response = await fetch(
//     "https://api.groq.com/openai/v1/chat/completions",
//     {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
//       },

//       body: JSON.stringify({
//         model: "llama-3.3-70b-versatile",

//         messages: [
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//       }),
//     },
//   );

//   if (!response.ok) {
//     throw new Error("Groq failed");
//   }

//   const data = await response.json();

//   const aiReply = data.choices[0].message.content;

//   const jsonStart = aiReply.indexOf("{");

//   const jsonEnd = aiReply.lastIndexOf("}");

//   return JSON.parse(aiReply.slice(jsonStart, jsonEnd + 1));
// };
export const generateMovieRecommendation = async ({
  userId,
  genre,
  random,
}) => {

  const watchedMovies = await getUserWatchedMovies(userId);

  const watchedIds = watchedMovies.map((movie) => movie.movieId);

  let selectedGenre;

  if (random) {
    selectedGenre = getRandomGenre();
  } else {
    selectedGenre = genres.find((item) => item.id === Number(genre));
  }

  if (!selectedGenre) {
    throw new Error("Invalid genre");
  }

console.log(API);
console.log(TOKEN ? "token hai" : "token missing");
  const tmdbUrl = `${API}/discover/movie?with_genres=${selectedGenre.id}&sort_by=popularity.desc`;

  console.log("Calling TMDB...");
  console.log("TMDB URL:", tmdbUrl);
  console.log("TMDB TOKEN:", TOKEN ? "YES" : "NO");


 const tmdbResponse = await fetch(
  `${API}/discover/movie?with_genres=${selectedGenre.id}&sort_by=popularity.desc`,
  {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: "application/json",
    },
  }
);



  console.log("TMDB STATUS:", tmdbResponse.status);


  if (!tmdbResponse.ok) {
    const errorData = await tmdbResponse.text();
    console.log("TMDB ERROR:", errorData);

    throw new Error("TMDB request failed");
  }


  const tmdbData = await tmdbResponse.json();


  const availableMovies = tmdbData.results.filter(
    (movie) => !watchedIds.includes(movie.id)
  );


  if (availableMovies.length === 0) {
    throw new Error("No new movies available");
  }


  const candidates = availableMovies.slice(0, 20).map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    rating: movie.vote_average,
    genre: selectedGenre.name,
    poster: movie.poster_path,
  }));


  const prompt = `

You are a movie recommendation AI.

Select ONLY ONE movie from the candidates.

User wants a ${selectedGenre.name} movie.

Choose the movie that matches best.

Return ONLY valid JSON:

{
"title":"",
"movieId":"",
"reason":"",
"genre":"",
"rating":"",
"whyItMatchesUser":""
}

Candidates:

${JSON.stringify(candidates)}

`;


  console.log("Calling Groq...");


  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },

      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );


  console.log("GROQ STATUS:", response.status);


  if (!response.ok) {
    const errorData = await response.text();
    console.log("GROQ ERROR:", errorData);

    throw new Error("Groq failed");
  }


  const data = await response.json();


  const aiReply = data.choices[0].message.content;


  console.log("AI RESPONSE:", aiReply);


  const jsonStart = aiReply.indexOf("{");
  const jsonEnd = aiReply.lastIndexOf("}");


  return JSON.parse(
    aiReply.slice(jsonStart, jsonEnd + 1)
  );
};