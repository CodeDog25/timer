let timeSet = process.argv;
const timer = () => {
  for (let i = 2; i < timeSet.length; i++) {
    if (timeSet[i] !== NaN && timeSet[i] >= 0) {
      setTimeout(() => {
        process.stdout.write(".");
      }, 1000 * timeSet[i])
    }
  }
};
timer(timeSet);

