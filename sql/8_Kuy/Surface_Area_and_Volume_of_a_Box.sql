-- https://www.codewars.com/kata/565f5825379664a26b00007c/train/sql

-- depth can also be referred to as length
SELECT *,2*(depth*width+depth*height+width*height) AS area,width*depth*height volume
FROM box ORDER BY area, volume, width, height