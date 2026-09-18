-- https://www.codewars.com/kata/57eae65a4321032ce000002d/train/sql

SELECT x,REGEXP_REPLACE(REGEXP_REPLACE(x,'[1-4]','0','g'),'[5-9]','1','g') res FROM fakebin