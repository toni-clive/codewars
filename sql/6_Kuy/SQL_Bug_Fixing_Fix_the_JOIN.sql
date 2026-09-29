-- https://www.codewars.com/kata/580fb94e12b34dd1c40001f0/train/sql

-- code to fix 

/*
SELECT 
  j.jobs_title,
  SUM(j.salary) / COUNT(p) as average_salarys,
  COUNT(p.id) as total_peoples,
  SUM(j.salary),2 as total_salarys
  FROM people p
    JOIN job j
  GROUP BY j.job_title
  ORDER BY total_salarys
*/

SELECT 
  j.jobs_title,
  SUM(j.salary) / COUNT(p) as average_salarys,
  COUNT(p.id) as total_peoples,
  SUM(j.salary),2 as total_salarys
  FROM people p
    JOIN job j
  GROUP BY j.job_title
  ORDER BY total_salarys