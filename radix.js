function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < arr.length; i++) {
        let digit = getDigit(arr[i], k);
        digitBuckets[digit].push(arr[i]);
      }
      arr = [].concat(...digitBuckets);
    }
    return arr;
  }
  
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  module.exports = {radixSort, getDigit, mostDigits, digitCount, radixSort};
  