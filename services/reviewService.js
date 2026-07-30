import { createReview, getMovieReviews, findReviewById, deleteReviewById, getMovieReviewsforAI } from "../repositories/reviewRepo.js";

export const addReviewService = async ({ movieId, type, userId, review }) => {
  return await createReview({
    movieId,
    type,
    userId,
    review,
  });
};

export const getMovieReviewsService = async (movieId, type) => {
  return await getMovieReviews(movieId, type);
};

export const deleteReviewService = async (reviewId, userId) => {
  const review = await findReviewById(reviewId);

  if (!review) {
    throw new Error("Review not found");
  }

  if (review.userId.toString() !== userId.toString()) {
    throw new Error("Unauthorized");
  }

  await deleteReviewById(reviewId);

  return {
    message: "Review deleted successfully",
  };
};


export const summarizeReviewsService = async (movieId, type) => {
  const reviews = await getMovieReviewsforAI(movieId, type);

  const reviewText = reviews
    .map((item) => item.review)
    .join("\n");

  const prompt = buildReviewPrompt(reviewText);
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

if (!response.ok) {
  throw new Error("Failed to get AI summary");
}

const data = await response.json();

const aiReply = data.choices[0].message.content;


const jsonStart = aiReply.indexOf("{");
const jsonEnd = aiReply.lastIndexOf("}");

return JSON.parse(aiReply.slice(jsonStart, jsonEnd + 1));
};

const buildReviewPrompt = (reviews) => {
  return `
You are an expert movie review analyst.

Analyze the following user reviews of a movie and provide a concise audience insight report.

Return ONLY valid JSON. Do not add markdown, explanations, or extra text.

Use exactly this format:

{
  "summary": "A short 3-4 sentence summary explaining what most viewers think about the movie.",
  
  "sentiment": {
    "overall": "Positive | Mostly Positive | Mixed | Mostly Negative | Negative",
    "score": <number between 0 and 100>,
    "explanation": "Explain why viewers feel this way."
  },

  "commonLikes": [
    "Things viewers frequently appreciated"
  ],

  "commonDislikes": [
    "Things viewers frequently criticized"
  ],

  "keywords": [
    "Most repeated words/topics from reviews"
  ],

  "audienceOpinion": "One sentence describing the general audience reaction."
}
REVIEWS:

${reviews}
`;
};
