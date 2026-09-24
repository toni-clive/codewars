-- https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/sql

SELECT month,  CEIL(month/3.0)::int  res FROM quarterof
