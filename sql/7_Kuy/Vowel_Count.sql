-- https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/sql

SELECT str,
(SELECT COUNT(CASE WHEN a.v in ('a','e','i','o','u') THEN 1 END)
 FROM (SELECT regexp_split_to_table(str, '') AS v)a 
 
 ) res
FROM getcount GROUP BY str ORDER BY str