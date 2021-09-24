const contaLetra = (Letra, palavra) => {
  let qt = 0
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() === Letra.toLowerCase()) qt++
  }
}
