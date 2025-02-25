// Approach 1: Iterative using a for loop
function sum_to_n_a(n: number): number {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}
// Time Complexity: O(n) - The loop runs n times, performing n additions.
  
  
// Approach 2: Mathematical formula
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}
// Time Complexity: O(1) - Uses a direct formula with constant-time operations.

  
// Approach 3: Recursive implementation
function sum_to_n_c(n: number): number {
    if (n <= 0) return 0;
    return n + sum_to_n_c(n - 1);
}
// Time Complexity: O(n) - Calls the function recursively n times, leading to n additions.

// Test
// console.log(`a: ${sum_to_n_a(5)}, b: ${sum_to_n_b(5)}, c: ${sum_to_n_c(5)}`);

export { sum_to_n_a, sum_to_n_b, sum_to_n_c };
  