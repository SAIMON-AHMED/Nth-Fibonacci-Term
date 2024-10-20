# Fibonacci Sequence - Get the Nth Fibonacci Number

This repository contains the implementation of a recursive function getNthFib that returns the Nth Fibonacci number. The Fibonacci sequence is defined as follows:

	Fib(1) = 0
	Fib(2) = 1
	Fib(n) = Fib(n-1) + Fib(n-2) for n > 2

**Problem Description**: Given a positive integer n, the task is to return the Nth Fibonacci number.

**Input**

n: A positive integer representing the position in the Fibonacci sequence.

**Output**

The function returns the Fibonacci number at position n.

**Approach**

The algorithm uses a recursive method to calculate the Fibonacci number at position n. For each call, it recursively computes the sum of the two previous Fibonacci numbers:

**Base Case:**

If n is 1, the function returns 0 (the first Fibonacci number).

If n is 2, the function returns 1 (the second Fibonacci number).


**Recursive Case:**

For any n > 2, the function calls itself recursively to calculate the sum of getNthFib(n - 1) and getNthFib(n - 2).


Example Usage

	const { getNthFib } = require('./getNthFib');
	
	// Get the 6th Fibonacci number
	const nthFib = getNthFib(6);

	// Output: The 6th Fibonacci number is 5
	console.log(nthFib);
 
Recursive Tree Example for n = 6:


	getNthFib(6)
	├── getNthFib(5)
	│   ├── getNthFib(4)
	│   │   ├── getNthFib(3)
	│   │   │   ├── getNthFib(2) -> 1
	│   │   │   └── getNthFib(1) -> 0
	│   │   └── getNthFib(2) -> 1
	│   └── getNthFib(3)
	│       ├── getNthFib(2) -> 1
	│       └── getNthFib(1) -> 0
	└── getNthFib(4)
	    ├── getNthFib(3)
	    │   ├── getNthFib(2) -> 1
	    │   └── getNthFib(1) -> 0
	    └── getNthFib(2) -> 1
		 
**Time and Space Complexity**

Time Complexity: O(2^n) - Since the function makes two recursive calls for each input, the time complexity grows exponentially.

Space Complexity: O(n) - The space complexity is proportional to the depth of the recursive call stack, which is n.

**Conclusion**

The getNthFib function provides a simple recursive solution to finding the Nth Fibonacci number. However, due to the exponential time complexity, this method is inefficient for large n values.
