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

Results from running in GitHub Actions:

```
# Chromium
Array.prototype.some x 78.59 ops/sec ±0.16% (58 runs sampled)
for i++ loop x 1,500 ops/sec ±0.19% (65 runs sampled)
for of loop x 601 ops/sec ±0.16% (66 runs sampled)
count evens with .filter().length x 45.56 ops/sec ±4.01% (49 runs sampled)
count evens with for i++ loop x 596 ops/sec ±0.16% (67 runs sampled)
count evens with for of loop x 534 ops/sec ±0.21% (64 runs sampled)
Math.max(...) x 26,940 ops/sec ±0.16% (68 runs sampled)
reduce(Math.max) x 10,564 ops/sec ±21.20% (65 runs sampled)
join strings with reduce(a + b) x 10.22 ops/sec ±5.41% (29 runs sampled)
join strings with .join() x 21.75 ops/sec ±6.39% (40 runs sampled)
join numbers with reduce(a + b) x 4.49 ops/sec ±8.92% (15 runs sampled)
join numbers with .join() x 4.91 ops/sec ±12.02% (17 runs sampled)
join numbers with .map().join() x 4.67 ops/sec ±3.92% (16 runs sampled)

# Firefox
Array.prototype.some x 125 ops/sec ±0.35% (58 runs sampled)
for i++ loop x 155 ops/sec ±0.43% (61 runs sampled)
for of loop x 90.28 ops/sec ±0.36% (58 runs sampled)
count evens with .filter().length x 76.49 ops/sec ±2.52% (50 runs sampled)
count evens with for i++ loop x 367 ops/sec ±0.22% (65 runs sampled)
count evens with for of loop x 108 ops/sec ±0.25% (56 runs sampled)
Math.max(...) x 15,791 ops/sec ±12.69% (46 runs sampled)
reduce(Math.max) x 4,859 ops/sec ±43.08% (28 runs sampled)
join strings with reduce(a + b) x 23.19 ops/sec ±7.99% (28 runs sampled)
join strings with .join() x 51.28 ops/sec ±3.06% (45 runs sampled)
join numbers with reduce(a + b) x 9.82 ops/sec ±8.88% (21 runs sampled)
join numbers with .join() x 34.80 ops/sec ±2.24% (46 runs sampled)
join numbers with .map().join() x 10.86 ops/sec ±6.53% (30 runs sampled)

# WebKit
Array.prototype.some x 419 ops/sec ±10.16% (55 runs sampled)
for i++ loop x 752 ops/sec ±0.08% (51 runs sampled)
for of loop x 366 ops/sec ±5.28% (64 runs sampled)
count evens with .filter().length x 158 ops/sec ±4.62% (59 runs sampled)
count evens with for i++ loop x 541 ops/sec ±0.14% (65 runs sampled)
count evens with for of loop x 284 ops/sec ±0.16% (63 runs sampled)
Math.max(...) x 18,468 ops/sec ±1.79% (66 runs sampled)
reduce(Math.max) x 59,233 ops/sec ±0.27% (66 runs sampled)
join strings with reduce(a + b) x 33.63 ops/sec ±7.32% (37 runs sampled)
join strings with .join() x 38.07 ops/sec ±1.04% (50 runs sampled)
join numbers with reduce(a + b) x 10.47 ops/sec ±6.67% (23 runs sampled)
join numbers with .join() x 16.18 ops/sec ±0.65% (31 runs sampled)
join numbers with .map().join() x 6.03 ops/sec ±45.12% (24 runs sampled)
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

## Thanks

- Forked from Adrian Lowdon’s work: https://javascript.plainenglish.io/using-playwright-and-benchmark-js-to-test-javascript-performance-across-browsers-99fc0dc56e55 https://gist.github.com/alowdon/0580047afb245a2c462c962b02a685a3
