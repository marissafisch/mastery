CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(180),
email VARCHAR(180),
);

CREATE TABLE workouts (
workout_id SERIAL PRIMARY KEY,
workout_date DATE,
description VARCHAR(500),
calories_burned INTEGER,
);