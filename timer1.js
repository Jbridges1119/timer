const args = process.argv.slice(2);

for (let number of args) {
  if (!isNaN(number) || number > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000);
  }
};




