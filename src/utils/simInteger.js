export const simInteger = (value) => {
  // levels of 1000
  let count = 0;

  // manipulate negative number
  let sign = "";
  if (value < 0) {
    sign = "-";
    value = -value;
  }

  // determine levels of 1000
  while (value >= 1000) {
    count += 1;
    value /= 1000;
  }

  // complete necessary formatting
  value = Math.round(value);

  const letters = [" ", "k", "M", "G", "T", "P", "E", "Z", "Y"];

  return `${sign}${value}${letters[count]}`;
};
