function palindromo(string) {
  if(!string || !string.length)
  return
  string === string.split('').reverse().join('') ? console.log(`É uma polindromo ${string}`)
  : 
  console.error('Sem polindronomo')
}


palindromo("raiar");