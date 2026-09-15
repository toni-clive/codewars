-- https://www.codewars.com/kata/52fba66badcd10859f00097e/train/sql

SELECT str, TRANSLATE(str,'aeiouAIEOU','') res FROM disemvowel ORDER BY str
