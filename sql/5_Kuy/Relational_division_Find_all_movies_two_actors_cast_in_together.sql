-- https://www.codewars.com/kata/5817b124e7f4576fd00020a2/train/sql

 SELECT title FROM film JOIN (SELECT fa.film_id
FROM actor a JOIN film_actor fa ON fa.actor_id = a.actor_id WHERE a.actor_id = 105 OR a.actor_id = 122
GROUP BY fa.film_id
HAVING COUNT(film_id) = 2) a ON film.film_id = a.film_id ORDER BY title
