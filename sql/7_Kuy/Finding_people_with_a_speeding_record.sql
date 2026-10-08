-- https://www.codewars.com/kata/657b4b40df4e8e112a17fe73/train/sql

SELECT p.id person_id, p.birthdate, COALESCE(SUM(speed_delta),0) total_speed_delta FROM people p 
LEFT JOIN records r ON p.id = r.person_id GROUP BY p.id ORDER BY p.id 