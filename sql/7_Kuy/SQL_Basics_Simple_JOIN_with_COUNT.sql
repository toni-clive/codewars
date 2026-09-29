-- https://www.codewars.com/kata/580918e24a85b05ad000010c/train/sql

SELECT p.*,COUNT(t.people_id) toy_count  FROM people p JOIN toys t ON p.id = t.people_id GROUP BY p.id
