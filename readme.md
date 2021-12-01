# Benchmarking common JavaScript operations across browsers

Install:

```bash
npm ci
npx playwright install
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
Array.prototype.some x 65.73 ops/sec ±0.24% (52 runs sampled)
for i++ loop x 1,254 ops/sec ±0.19% (65 runs sampled)
for of loop x 498 ops/sec ±1.12% (65 runs sampled)
Math.max(...) x 22,450 ops/sec ±0.29% (66 runs sampled)
reduce(Math.max) x 6,804 ops/sec ±15.02% (64 runs sampled)

Array.prototype.some x 115 ops/sec ±0.43% (59 runs sampled)
for i++ loop x 109 ops/sec ±0.29% (57 runs sampled)
for of loop x 69.92 ops/sec ±0.23% (52 runs sampled)
Math.max(...) x 16,786 ops/sec ±14.35% (49 runs sampled)
reduce(Math.max) x 4,552 ops/sec ±42.19% (27 runs sampled)

Array.prototype.some x 364 ops/sec ±5.60% (60 runs sampled)
for i++ loop x 631 ops/sec ±0.51% (52 runs sampled)
for of loop x 344 ops/sec ±8.19% (64 runs sampled)
Math.max(...) x 14,306 ops/sec ±1.30% (64 runs sampled)
reduce(Math.max) x 54,970 ops/sec ±0.15% (66 runs sampled)
```

## Thanks

- Forked from Adrian Lowdon’s work: https://javascript.plainenglish.io/using-playwright-and-benchmark-js-to-test-javascript-performance-across-browsers-99fc0dc56e55 https://gist.github.com/alowdon/0580047afb245a2c462c962b02a685a3
