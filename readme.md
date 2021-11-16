# Benchmarking common JavaScript operation across browsers

Install:

```bash
npm ci
```

To run the benchmarks:

```bash
npm t
```

These are the results I see on my MacBook Pro M1 Pro on Low Power Mode:

```
  ✓  [chromium] › bench.spec.js:3:1 › Run benchmarks (17s)
Array.prototype.some x 132 ops/sec ±0.15% (64 runs sampled)
for i++ loop x 1,344 ops/sec ±0.47% (66 runs sampled)
for of loop x 149 ops/sec ±0.16% (61 runs sampled)
  ✓  [firefox] › bench.spec.js:3:1 › Run benchmarks (17s)
Array.prototype.some x 265 ops/sec ±0.20% (63 runs sampled)
for i++ loop x 275 ops/sec ±0.16% (66 runs sampled)
for of loop x 275 ops/sec ±0.19% (66 runs sampled)
  ✓  [webkit] › bench.spec.js:3:1 › Run benchmarks (17s)
Array.prototype.some x 551 ops/sec ±16.82% (50 runs sampled)
for i++ loop x 1,758 ops/sec ±0.14% (68 runs sampled)
for of loop x 1,274 ops/sec ±26.11% (65 runs sampled)

  Slow test: [firefox] › bench.spec.js (17s)
  Slow test: [chromium] › bench.spec.js (17s)
  Slow test: [webkit] › bench.spec.js (17s)

  3 passed (53s)
````

## Thanks

- Forked from Adrian Lowdon’s work: https://javascript.plainenglish.io/using-playwright-and-benchmark-js-to-test-javascript-performance-across-browsers-99fc0dc56e55 https://gist.github.com/alowdon/0580047afb245a2c462c962b02a685a3
