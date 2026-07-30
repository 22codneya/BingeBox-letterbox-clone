#  BingeBox – AI-Powered Movie Review Platform

BingeBox is a full-stack MERN application inspired by Letterboxd that allows users to discover movies and TV shows, interact with them through likes, ratings, and reviews, and view AI-generated summaries of community opinions. Instead of maintaining a huge movie database, the application integrates with the TMDB API to fetch real-time movie information while storing user interactions in MongoDB.

---

#  Features

* 🔍 Search Movies & TV Shows
* 🎥 View Movie & TV Details
* ❤️ Like / Unlike Movies
* ⭐ Rate Movies
* ✍️ Write Reviews
* 👤 User Authentication (JWT)
* 👤 User Profile Management
* 🤖 AI Review Summary using Groq API
* 📊 Movie Statistics

  * Views
  * Likes
  * Average Rating
* 📱 Responsive UI

---

#  Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* CORS

## APIs

* TMDB API (Movie & TV Data)
* Groq AI API (AI Review Summaries)

---

# 🏗️ Project Architecture

```
Frontend
│
├── Pages
├── Components
├── Zustand Store
└── API Calls
        │
        ▼
Backend
│
├── Routes
│
├── Controllers
│
├── Services
│
├── Repositories
│
└── MongoDB
```

The project follows a layered architecture where each layer has a single responsibility:

* **Routes** → Define API endpoints.
* **Controllers** → Handle requests and responses.
* **Services** → Implement business logic.
* **Repositories** → Interact with MongoDB.
* **MongoDB** → Stores application data.

---

# 🗄️ Database Collections

## User

Stores user information.

* Username
* Email
* Password (Hashed)
* Profile Image
* Bio

---

## Review

Stores movie reviews.

* Movie ID
* Movie Type
* User ID
* Review
* Created At

The `userId` references the User collection and is populated to display the review author's username and profile image.

---

## MovieLike

Stores which user liked which movie.

* User ID
* Movie ID
* Type

---

## MovieStats

Stores aggregated movie statistics.

* Views
* Likes
* Average Rating
* Total Ratings

This avoids recalculating statistics every time a movie page is opened.

---

# 🤖 AI Review Summary

One of the key features of BingeBox is AI-powered review summarization.

### Workflow

```
User Reviews
      │
      ▼
MongoDB
      │
      ▼
Backend collects reviews
      │
      ▼
Prompt Generation
      │
      ▼
Groq API
      │
      ▼
AI Summary
      │
      ├── Overall Summary
      ├── Common Keywords
      ├── Overall Sentiment
      ├── Positive Highlights
      └── Negative Highlights
```

Instead of reading dozens of reviews individually, users can quickly understand the overall community opinion.

---

# 🔐 Authentication

JWT-based authentication is implemented.

### Flow

```
Signup
   │
Password Hashing
   │
MongoDB
   │
Login
   │
JWT Token
   │
Protected Routes
```

Protected features include:

* Add Review
* Delete Review
* Like Movie
* Update Profile

---

# 🌐 External APIs

## TMDB API

Used for:

* Movie Search
* TV Search
* Movie Details
* TV Details
* Posters
* Backdrops
* Genres
* Ratings

Using TMDB keeps the database lightweight while providing up-to-date movie information.

---

## Groq AI API

Used for generating AI summaries of user reviews.

The backend sends all reviews for a movie to Groq, which analyzes them and returns structured JSON containing:

* Summary
* Keywords
* Overall Sentiment
* Positive Highlights
* Negative Highlights

---

# 📁 Folder Structure

```
bingebox/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   └── hooks/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── server.js
│
└── README.md
```

---


# 🔑 Environment Variables

Backend

```env
PORT=

MONGODB_URI=

JWT_SECRET=

GROQ_API_KEY=
```

Frontend

```env
VITE_API_URL=

VITE_TMDB_TOKEN=
```

---

# 🎯 Future Enhancements

* 🎞️ Public Movie Lists
* 👥 Follow Users
* ❤️ Like Reviews
* 💬 Review Comments
* 🎯 Personalized Movie Recommendations
* 📌 Watchlist
* 🔥 Trending Dashboard
* 🎭 Genre-based Recommendations

---

