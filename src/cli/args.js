const parseArgs = () => {
  const PREFIX = '--';
  const ars = process.argv.reduce((acc,value, index, array) =>
    value.startsWith(PREFIX) ? [...acc, `${value.replace(PREFIX, '')} is ${array[index + 1]}`] : acc, []).join(', ');

  console.log(ars);
};

parseArgs();