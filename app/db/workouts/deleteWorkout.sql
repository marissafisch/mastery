DELETE FROM workouts
WHERE workout_id = $1 AND user_id = $2;

SELECT *
FROM workouts
WHERE user_id = $2
ORDER BY workout_date;