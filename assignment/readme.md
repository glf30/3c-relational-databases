# Movie Reviews DB

## Overview

Build a MongoDB backend for a simple **Movie Reviews** app. The app will manage two collections:

- **Movies**: stores information about movies.
- **Reviews**: stores reviews for movies, each linked to a specific movie.

You will practice creating models, controllers, and routers that handle relational data using MongoDB references.

---

## Requirements

### 1. Movie Model

- Create a **Movie** schema with fields:
  - `title` (string, unique, required)
  - `genre` (string, required)
  - `releaseYear` (number, required)

- Export the Movie model.

---

### 2. Review Model

- Create a **Review** schema with fields:
  - `reviewText` (string, required)
  - `rating` (number, required, between 1 and 5)
  - `movie` (ObjectId referencing the Movie collection, required)

- Export the Review model.

---

### 3. Controllers

- Write a controller function to create a new movie.
- Write a controller function to create a new review linked to a movie by its ID.
- Write a controller function to retrieve a movie by its ID, populated with all its reviews.

---

### 4. Routers

- Create a router for movies with routes:
  - `POST /api/movies` — to create a movie.
  - `GET /api/movies/:movieId` — to get a movie with all reviews populated.

- Create a router for reviews with route:
  - `POST /api/reviews` — to create a review linked to a movie.

---

### Testing

- Use Postman to test the following:
  - Add movies by posting movie details.
  - Add reviews by posting review details along with the associated movie’s ID.
  - Retrieve a movie by ID, verifying that the returned data includes the movie details plus an array of its reviews.

---

## Bonus

- Ensure `rating` validation enforces a number between 1 and 5.
