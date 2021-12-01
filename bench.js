const suite = new Benchmark.Suite();

const values = [];
const existingPromise = Promise.resolve();

for (let i = 0; i < 1000000; i++) {
    values.push(i);
}

const fewerValues = values.slice(0, 10000);
const strings = values.map(n => n.toString());

function some(list, predicate) {
    if (list == null) {
        return false;
    }

    for (let i = 0; i < list.length; i++) {
        if (predicate(list[i], i)) {
            return true;
        }
    }

    return false;
}

function someIter(list, predicate) {
    if (list == null) {
        return false;
    }

    for (const item of list) {
        if (predicate(item)) {
            return true;
        }
    }

    return false;
}

suite
    .add('generate random number', {
        fn() {
            Math.random();
        }
    })
    .add('add two random numbers', {
        fn() {
            Math.random() + Math.random();
        }
    })
    .add('async: noop', {
        defer: true,
        fn(deferred) {
            deferred.resolve();
        }
    })
    .add('async: await null', {
        defer: true,
        fn(deferred) {
            (async () => {
                await null;
            }).call().then(() => {
                deferred.resolve();
            });
        }
    })
    .add('async: await null x 2', {
        defer: true,
        fn(deferred) {
            (async () => {
                await null;
                await null;
            }).call().then(() => {
                deferred.resolve();
            });
        }
    })
    .add('async: .then existing Promise.resolve()', {
        defer: true,
        fn(deferred) {
            existingPromise.then(() => {
                deferred.resolve();
            });
        }
    })
    .add('async: await existing Promise.resolve()', {
        defer: true,
        fn(deferred) {
            (async () => {
                await existingPromise;
            }).call().then(() => {
                deferred.resolve();
            });
        }
    })
    .add('async: .then fresh Promise.resolve()', {
        defer: true,
        fn(deferred) {
            Promise.resolve().then(() => {
                deferred.resolve();
            });
        }
    })
    .add('async: await fresh Promise.resolve()', {
        defer: true,
        fn(deferred) {
            (async () => {
                await Promise.resolve();
            }).call().then(() => {
                deferred.resolve();
            });
        }
    })
    .add('Array.prototype.some', () => {
        const processed = values.some(value => value > 990000);
    })
    .add('for i++ loop', () => {
        const processed = some(values, value => value > 990000);
    })
    .add('for of loop', () => {
        const processed = someIter(values, value => value > 990000);
    })
    .add('count evens with for i++ loop', () => {
        let count = 0;
        for (let i = 0; i < values.length; i++) {
            if (values[i] % 2 === 0) {
                count++;
            }
        }
    })
    .add('count evens with for of loop', () => {
        let count = 0;
        for (const n of values) {
            if (n % 2 === 0) {
                count++;
            }
        }
    })
    .add('count evens with .filter().length', () => {
        const processed = values.filter(n => n % 2 === 0).length;
    })
    .add('count evens with generator function', () => {
        function* filtered() {
            for (const n of values) {
                if (n % 2 === 0) {
                    yield n;
                }
            }
        }
        let count = 0;
        for (const n of filtered()) {
            count++;
        }
    })
    .add('Math.max(...)', () => {
        const processed = Math.max(...fewerValues);
    })
    .add('reduce(Math.max)', () => {
        const processed = fewerValues.reduce((max, current) => Math.max(max, current));
    })
    .add('join strings with reduce(a + b)', () => {
        const processed = strings.reduce((memo, current) => memo + current, '');
    })
    .add('join strings with .join()', () => {
        const processed = strings.join('');
    })
    .add('join numbers with reduce(a + b)', () => {
        const processed = values.reduce((memo, current) => memo + current.toString(), '');
    })
    .add('join numbers with .join()', () => {
        const processed = values.join('');
    })
    .add('join numbers with .map().join()', () => {
        const processed = values.map(n => n.toString()).join('');
    })
    .on('cycle', event => {
        const benchmark = event.target;

        console.log(benchmark.toString());
        // console.log(JSON.stringify(event));
    })
    .on('complete', () => console.log('Benchmark suite complete.'))
    .run();
