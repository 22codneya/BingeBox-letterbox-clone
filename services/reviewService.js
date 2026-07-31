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
You are an AI review analyst.

Analyze the following movie reviews and generate a professional review summary similar to Amazon's "Customers say" section.

Guidelines:

- Keep the tone neutral and professional.
- Do NOT exaggerate or use marketing language like "must watch", "masterpiece", "absolutely loved", etc.
- Base every statement only on the reviews provided.
- Mention both positive and negative feedback whenever available.
- If opinions are mixed, explicitly state that they are mixed.
- Keep the overall summary between 80–120 words.

Return ONLY valid JSON in the following format:

{
  "summary": "A concise professional summary of customer opinions.",
  "sentiment": {
    "overall": "Positive | Mostly Positive | Mixed | Mostly Negative | Negative",
    "score": 0-100,
    "explanation": "Explain briefly why this sentiment was chosen."
  },
  "strengths": [
    "Strength 1",
    "Strength 2",
    "Strength 3"
  ],
  "weaknesses": [
    "Weakness 1",
    "Weakness 2"
  ],
  "keywords": [
    "Keyword1",
    "Keyword2",
    "Keyword3",
    "Keyword4",
    "Keyword5"
  ],
  "overallOpinion": "One concise sentence summarizing the audience consensus."
}
REVIEWS:

${reviews}
`;
};
