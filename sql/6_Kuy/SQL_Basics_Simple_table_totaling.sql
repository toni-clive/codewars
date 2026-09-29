-- https://www.codewars.com/kata/5809575e166583acfa000083/train/sql

SELECT 
RANK() OVER(ORDER BY SUM(points) DESC)
,COALESCE(NULLIF('',clan),'[no clan specified]') clan
,SUM(points) total_points
,COUNT(*) total_people 
FROM people GROUP BY clan