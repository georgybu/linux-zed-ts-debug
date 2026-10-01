function fibonacci(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) return memo[n];
    if (n <= 0) return 0;
    if (n === 1) return 1;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(40)); // 102334155
