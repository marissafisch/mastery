UPDATE workouts
SET workout_date = $1, description = $2, calories_burned = $3
WHERE workout_id = $4

