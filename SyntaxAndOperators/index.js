function sumExample(number1, number2) {
  const sum = number1 + number2;
  const equal = number1 === number2 ? 'são iguais' : 'não são iguais';
  const majorThanTeen = sum > 10 ? 'maior que 10' : 'menor que 10';
  const minorThanTwenty = sum < 20 ? 'menor que 20' : 'maior que 20';

  console.log(`Os números ${number1} e ${number2} ${equal}. Sua soma é ${sum}, que é ${majorThanTeen} e ${minorThanTwenty}`)
}

sumExample(1,2)