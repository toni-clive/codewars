-- https://www.codewars.com/kata/649a8ed2c6ba0600314b258d/train/sql

with r_count as (SELECT f.film_id,COUNT(r.inventory_id) r_count FROM  film f LEFT JOIN inventory i
ON f.film_id = i.film_id LEFT JOIN rental r ON 
i.inventory_id = r.inventory_id GROUP BY f.film_id),
l_r as (SELECT film_actor.actor_id,r_count.film_id,r_count FROM r_count JOIN film_actor ON film_actor.film_id = r_count.film_id WHERE r_count <7)
,
a_count as (SELECT ac.actor_id,first_name || ' '|| last_name as full_name,COUNT( DISTINCT film_id) f_count FROM film_actor  JOIN actor ac
ON ac.actor_id = film_actor.actor_id GROUP BY ac.actor_id )

SELECT a_count.actor_id, a_count.full_name,	a_count.f_count film_count FROM a_count
WHERE a_count.actor_id NOT IN (SELECT actor_id FROM l_r)
AND f_count>=20
ORDER BY a_count.f_count DESC,actor_id