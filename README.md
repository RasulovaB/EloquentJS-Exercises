# EloquentJS-Exercises

## Looping a Triangle

Write a loop that makes seven calls to *console.log* to output the following triangle: 

```
#
##
###
####
#####
######
#######
```
[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/loops.js)

## FizzBuzz

Write a program that uses *console.log* to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/fizzBuzz.js)

## Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to *console.log* should show something like this:

```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```
[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/chess.js)

## Minimum

Write a function `min` that takes two arguments and returns their minimum.

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/min.js)

## Recursion

The recursive function `isEven` should accept a single parameter (a positive, whole number) and return a `Boolean`.

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/recursion.js)

## Bean Counting

Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called `countChar` that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/beanCount.js)

## The Sum of a Range

Write a `range` function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/SumOfRange.js)

## Reversing an array

For this exercise, write two functions, `reverseArray` and `reverseArrayInPlace`. The first, `reverseArray`, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, `reverseArrayInPlace`, does what the reverse method does: it modifies the array given as argument by reversing its elements.

[Solution](https://github.com/RasulovaB/EloquentJS-Exercises/blob/master/ReverseArray.js)







