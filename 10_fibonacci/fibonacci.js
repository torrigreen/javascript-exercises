const fibonacci = function(n) {
	n = +n;
	if (n < 0) return `OOPS`;
	if (n === 0 || n === 1) return n;


	const fib = [0, 1];
	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}

// Do not edit below this line
module.exports = fibonacci;
