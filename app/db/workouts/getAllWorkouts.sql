SELECT *
FROM workouts
WHERE user_id = $1
ORDER BY workout_id;