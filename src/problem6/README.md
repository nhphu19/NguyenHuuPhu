# Problem 6: Scoreboard API Specification

## Overview

This document describes the API service module for handling live scoreboard updates. The module is designed to securely update user scores while preventing unauthorized score manipulations.

## API Endpoints

### 1. Get Top 10 Users' Scores

- **Endpoint:** `GET /scores/top`
- **Description:** Retrieves the top 10 users with the highest scores.
- **Request Body:** None
- **Response:**
  ```json
  {
    "top_scores": [
      { "user_id": 1, "username": "player1", "score": 1200 },
      { "user_id": 2, "username": "player2", "score": 1150 }
    ]
  }
  ```

### 2. Update User Score

- **Endpoint:** `POST /scores/update`
- **Description:** Updates the user's score upon completing an action.
- **Request Body:**
  ```json
  {
    "user_id": 1,
    "score_increment": 10,
    "auth_token": "eyJhbGciOiJI..."
  }
  ```
- **Response:**
  ```json
  {
    "message": "Score updated successfully",
    "new_score": 1210
  }
  ```

## Execution Flow

1. The client fetches the top 10 users' scores by calling `GET /scores/top`.
2. When a user completes an action, the client sends a `POST /scores/update` request with authentication.
3. The backend verifies the authentication token.
4. If valid, the system updates the user's score in the database.
5. The updated score is broadcasted to all clients via WebSocket or Server-Sent Events (SSE) for real-time updates.

## Security & Improvements

- **Authentication:** Uses JWT/OAuth to verify legitimate requests.
- **Rate-limiting:** Prevents abuse by limiting update requests.
- **Real-time Updates:** WebSocket or SSE ensures the scoreboard reflects changes immediately.
- **Checksum Validation:** Ensures data integrity and prevents unauthorized score modifications.
