-- https://www.codewars.com/kata/59401e0e54a655a298000040/train/sql

SELECT id, name, POSITION(',' IN characteristics) comma FROM monsters ORDER BY comma
