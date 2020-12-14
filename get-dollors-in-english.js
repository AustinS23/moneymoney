
/**
 * assumptions: 
 * 1. All the units will be displayed in plural form, e.g. dollors, cents
 * 2. The value will be rounded if there are more than 2 decimal places
 */

const ONE_TO_NINETEEN = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const getNumberInEnglish = (num, unit) => {
    if (!num) return '';

    const hundreds = Math.floor(num / 100);
    const hundredsInEnglish = hundreds > 0 ? `${ONE_TO_NINETEEN[hundreds - 1]} hundred` : '';

    const tensAndOnes = num % 100;
    let tensAndOnesInEnglish = '';
    if (tensAndOnes > 20) {
        const tens = Math.floor(tensAndOnes / 10);
        const ones = tensAndOnes % 10;

        tensAndOnesInEnglish = `${TENS[tens - 2]} ${ONE_TO_NINETEEN[ones - 1]}`;
    } else if (tensAndOnes > 0) {
        tensAndOnesInEnglish = ONE_TO_NINETEEN[tensAndOnes - 1];
    }

    return [hundredsInEnglish, tensAndOnesInEnglish].filter(Boolean).join(' and ') + ` ${unit}`;

}

const getDollorsInEnglish = (value) => {
    if (isNaN(value)) {
        throw new Error('Please input a valid number');
    }

    if (value < 0 || value > 1000) {
        throw new Error('Please input a number between 0 to 1000.');
    }

    value = +value.toFixed(2);

    if (value === 0) {
        return 'zero dollors';
    }

    if (value === 1000) {
        return 'one thousand dollors';
    }

    const [integer, decimal] = value.toString().split('.').map(s => +s);

    return [getNumberInEnglish(integer, 'dollors'), getNumberInEnglish(decimal, 'cents')].filter(Boolean).join(' and ');
}

module.exports = getDollorsInEnglish;