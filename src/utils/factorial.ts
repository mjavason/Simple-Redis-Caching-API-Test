// export async function factorial(n: number): Promise<number> {
//   if (n === 0 || n === 1) {
//     console.log(`Currently at ${n}`);
//     return 1;
//   } else {
//     console.log(`Currently at ${n}`);
//     return n * (await factorial(n - 1));
//   }
// }

export async function factorial(
  n: number,
  memo: Record<number, number> = {}
): Promise<number> {
  if (n === 0 || n === 1) {
    console.log(`Currently at ${n}`);
    return 1;
  }

  if (memo[n] !== undefined) {
    console.log(`Using memo for ${n}`);
    return memo[n];
  }

  console.log(`Currently at ${n}`);
  memo[n] = n * await factorial(n - 1, memo);
  return memo[n];
}
