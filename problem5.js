'use strict'
/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function isPalindrome(num) {
	var numLength = num.length
	for (var i=0; i<numLength; i++) {
		if (num[i] != num[numLength-1]) {
			return false;
		}
		numLength--;
	}
	return true
}

var product = 0
var largest = 0

for(var i=999; i>100; i--) {
	for( var j=999; j>100; j--) {
		product = i*j
		if (isPalindrome(product.toString()) && product > largest) {
			largest = product
		}
	}
}

console.log("Largest Palindrome: " + largest);
