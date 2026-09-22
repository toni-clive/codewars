-- https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/sql

WITH m AS (SELECT x,n,(GENERATE_SERIES(x,x*n,x)) res FROM counter ORDER BY x,n)

SELECT m.x,m.n,ARRAY_AGG(DISTINCT m.res) res FROM m JOIN m m2 ON m.x = m2.x AND m.n = m2.n GROUP BY m.x,m.n