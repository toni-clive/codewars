// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript
// Tags 
// Fundamentals
// Mathematics
// Geometry

/*
Area of a Square from Arc Length if a square's side is derived from a quarter-circle arc length $A$,
the radius $r$ is calculated as r= π2A/π
The area of the square (where side $= r$) is then: Area=( 2A/π) **2
*/

function squareArea(A) {
    return ((2*A)/Math.PI)**2
}