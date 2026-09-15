-- https://www.codewars.com/kata/5ac698cdd325ad18a3000170/train/sql

SELECT name,COUNT(CASE WHEN won= 1 THEN 1 END) won,COUNT(CASE WHEN lost= 1 THEN 1 END) lost FROM fighters
JOIN winning_moves ON fighters.move_id = winning_moves.id
WHERE move NOT LIKE '%ken' GROUP BY name
ORDER BY won DESC LIMIT 6