//data teams
// const dataDolphins = (96 + 108 + 89) / 3;
// const dataKoalas = (88 + 91 + 110) / 3;
// console.log(dataDolphins, dataKoalas);
//calculate average

//bonus 1 Include a requirement for a minimum score of 100
// const dataDolphins = (97 + 112 + 101) / 3;
// const dataKoalas = (109 + 95 + 123) / 3;

//bonus 2 Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
const dataDolphins = (97 + 112 + 101) / 3;
const dataKoalas = (109 + 95 + 106) / 3;

if (dataDolphins > dataKoalas && dataDolphins >= 100) {
  console.log("Dolphins win");
} else if (dataKoalas > dataDolphins && dataKoalas >= 100) {
  console.log("Koalas win");
} else if (
  dataDolphins === dataKoalas &&
  dataDolphins > 100 &&
  dataKoalas >= 100
) {
  console.log("Both win");
} else {
  console.log("No one win");
}
