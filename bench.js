const suite = new Benchmark.Suite();

const values = [];

for (let i = 0; i < 1000000; i++) {
    values.push(i);
}

const fewerValues = values.slice(0, 10000);

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
    .add('Array.prototype.some', () => {
        const processed = values.some(value => value > 990000);
    })
    .add('for i++ loop', () => {
        const processed = some(values, value => value > 990000);
    })
    .add('for of loop', () => {
        const processed = some(values, value => value > 990000);
    })
    .add('Math.max(...)', () => {
        const processed = Math.max(...fewerValues);
    })
    .add('reduce(Math.max)', () => {
        const processed = fewerValues.reduce((max, current) => Math.max(max, current));
    })
    .on('cycle', event => {
        const benchmark = event.target;

        console.log(benchmark.toString());
    })
    .on('complete', () => console.log('Benchmark suite complete.'))
    .run();