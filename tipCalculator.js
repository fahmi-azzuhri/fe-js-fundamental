const bill = 400;
const tip = bill * (15 / 100);
const tip2 = bill * (20 / 100);

if (bill >= 50 && bill <= 300) {
  console.log(
    `the bill was ${bill}, the tip was ${tip},and total value ${bill + tip}`
  );
} else {
  console.log(
    `the bill was ${bill}, the tip was ${tip2},and total value ${bill + tip2}`
  );
}
