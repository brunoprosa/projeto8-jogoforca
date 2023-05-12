export default function chutarLetra(letra, palavra, palavraVisivel, setArrayPalavraVisivel, erros, setErros) {
    console.log(letra);
    console.log(palavra);
    let arrayPalavraVisivelIntermediario = [...palavraVisivel]
    let acerto = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (letra === palavra[i]) {
            acerto++;
            arrayPalavraVisivelIntermediario[i] = palavra[i];
            setArrayPalavraVisivel(arrayPalavraVisivelIntermediario);
        }
    }
    if (acerto === 0) {
        if (erros === 5) {
            console.log("você perdeu");
        }
        setErros(erros + 1);
    }
    if (!arrayPalavraVisivelIntermediario.includes("_ ")) console.log("você ganhou");
}