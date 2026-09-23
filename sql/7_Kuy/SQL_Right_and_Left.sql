-- https://www.codewars.com/kata/5943a58f95d5f72cb900006a/train/sql

SELECT  SUBSTR(project,1,commits) project,SUBSTR(address,LENGTH(address)-contributors+1, contributors+1) address
FROM repositories 


SELECT LEFT(project,commits) project, RIGHT(address,contributors) address FROM repositories;