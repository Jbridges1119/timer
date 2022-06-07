const args = process.argv.slice(2);
const arr = args.sort((a, b) => a - b);

if (arr.length === 0) {
} else {
  for (let number of arr) {
    if (isNaN(number) || number < 0) {
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, number * 1000);
    }
  }
}
