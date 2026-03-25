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

### 4. Controllers and Routers

Achieve the following routes by creating router files to deal with the routing and controller files to deal with the logic

- Create a router for movies with routes:
  - `POST /api/movies` — to create a movie.
  - `GET /api/movies` - Return all movies and through using queries, allow the user to filter movies by genre
  - `GET /api/movies/:movieId` — to get a movie with all reviews associated with that movie. (Do this after setting up a POST route for your reviews) (see HINT for help)

- Create a router for reviews with route:
  - `GET /api/reviews` - get all reviews
  - `POST /api/reviews` — to create a review linked to a movie.

---

## HINT

- For getting a specific movie by its ID, you should utilize the model's .findOne() function.  You will need to come up with a way to return both the movie object as well as the array of reviews in a single function. If you are having trouble, first start by getting all of the reviews associated with the movie without worrying about the Movie data.
