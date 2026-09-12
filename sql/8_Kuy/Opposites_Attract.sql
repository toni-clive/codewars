-- https://www.codewars.com/kata/555086d53eac039a2a000083/train/sql

SELECT flower1,flower2,
CASE WHEN (flower1%2 = 0 AND flower2%2=1)THEN true
WHEN  (flower1%2 = 1 AND flower2%2=0) THEN true ELSE false END
res FROM love