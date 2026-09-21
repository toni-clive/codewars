-- https://www.codewars.com/kata/5811597e9d278beb04000038/train/sql

SELECT created_at::date AS day,description,COUNT(*) FROM events WHERE name = 'trained' GROUP BY created_at::date, description ;
