# Benchmarking common JavaScript operation across browsers

Install:

```bash
npm ci
```

To run the benchmarks:

```bash
npm t
```

Results from MacBook Pro M1 Pro on Low Power Mode:

```
  ✓  [chromium] › bench.spec.js:3:1 › Run benchmarks (28s)
Array.prototype.some x 130 ops/sec ±0.15% (63 runs sampled)
for i++ loop x 1,348 ops/sec ±0.44% (64 runs sampled)
for of loop x 897 ops/sec ±0.16% (68 runs sampled)
Math.max(...) x 55,741 ops/sec ±1.81% (68 runs sampled)
reduce(Math.max) x 34,120 ops/sec ±34.43% (65 runs sampled)

  ✓  [firefox] › bench.spec.js:3:1 › Run benchmarks (28s)
Array.prototype.some x 264 ops/sec ±0.26% (54 runs sampled)
for i++ loop x 275 ops/sec ±0.21% (66 runs sampled)
for of loop x 175 ops/sec ±0.20% (62 runs sampled)
Math.max(...) x 47,678 ops/sec ±0.21% (68 runs sampled)
reduce(Math.max) x 6,564 ops/sec ±48.98% (29 runs sampled)

  ✓  [webkit] › bench.spec.js:3:1 › Run benchmarks (28s)
Array.prototype.some x 549 ops/sec ±17.00% (49 runs sampled)
for i++ loop x 1,775 ops/sec ±0.19% (69 runs sampled)
for of loop x 548 ops/sec ±0.17% (67 runs sampled)
Math.max(...) x 36,006 ops/sec ±0.44% (67 runs sampled)
reduce(Math.max) x 66,401 ops/sec ±0.16% (68 runs sampled)
```

Results from running in GitHub Actions:

```
Array.prototype.some x 94.12 ops/sec ±0.97% (54 runs sampled)
for i++ loop x 1,460 ops/sec ±2.42% (61 runs sampled)
for of loop x 119 ops/sec ±1.38% (56 runs sampled)

Array.prototype.some x 130 ops/sec ±1.57% (55 runs sampled)
for i++ loop x 132 ops/sec ±1.61% (53 runs sampled)
for of loop x 134 ops/sec ±1.32% (57 runs sampled)

Array.prototype.some x 969 ops/sec ±9.76% (58 runs sampled)
for i++ loop x 1,877 ops/sec ±1.26% (60 runs sampled)
for of loop x 998 ops/sec ±38.36% (60 runs sampled)
```

## Thanks

- Forked from Adrian Lowdon’s work: https://javascript.plainenglish.io/using-playwright-and-benchmark-js-to-test-javascript-performance-across-browsers-99fc0dc56e55 https://gist.github.com/alowdon/0580047afb245a2c462c962b02a685a3
