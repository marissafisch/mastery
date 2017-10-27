INSERT INTO workouts
(user_id, workout_date, description, calories_burned)
VALUES
($1, $2, $3, $4);

SELECT *
FROM workouts
WHERE user_id = $1
ORDER BY workout_id;