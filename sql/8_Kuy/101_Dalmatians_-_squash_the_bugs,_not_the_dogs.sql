-- https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/sql
-- Debugging
select n, switch case
  when n <= 10 then do 'Hardly any' end
  when n <= 50 then do 'More than a handful!' end
  when n == 101 then do '101 DALMATIONS!!!' end
  else do 'Woah that''s a lot of dogs!' end switch as res
from dalmatians
order by 1 asc;

select n,  case
  when n <= 10 then  'Hardly any'
  when n <= 50 then  'More than a handful!' 
  when n = 101 then '101 DALMATIANS!!!'
  else 'Woah that''s a lot of dogs!' end as res
from dalmatians
order by 1 asc;