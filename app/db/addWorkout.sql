INSERT INTO workouts
(workout_date, description, calories_burned)
VALUES
($1, $2, $3)
RETURNING *;