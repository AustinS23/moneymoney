const getDollorsInEnglish = require('./get-dollors-in-english');

test('input a large number', () => {
    expect(getDollorsInEnglish(923)).toBe('nine hundred and twenty three dollors');
});

test('input a small number', () => {
    expect(getDollorsInEnglish(11)).toBe('eleven dollors');
});

test('input a number with single digit', () => {
    expect(getDollorsInEnglish(2)).toBe('two dollors');
});

test('input a number with decimal', () => {
    expect(getDollorsInEnglish(55.17)).toBe('fifty five dollors and seventeen cents');
});

test('input a number with only decimals', () => {
    expect(getDollorsInEnglish(0.12)).toBe('twelve cents');
});

test('input zero', () => {
    expect(getDollorsInEnglish(0)).toBe('zero dollors');
});

test('input one thousand', () => {
    expect(getDollorsInEnglish(1000)).toBe('one thousand dollors');
});

test('input a number less than zero', () => {
    expect(() => getDollorsInEnglish(-1)).toThrow();
});

test('input a number more than a thousand', () => {
    expect(() => getDollorsInEnglish(1001)).toThrow();
});

test('input an invalid number', () => {
    expect(() => getDollorsInEnglish('something')).toThrow();
});