export default function chutarLetra(
    letra, index, palavra, palavraVisivel, setPalavraVisivel, erros, setErros, indexDisabled, setIndexDisabled, setIsAllDisabled, setLoss, setWin
    ) {
    console.log(letra);
    console.log(palavra);
    let palavraVisivelIntermediario = [...palavraVisivel]
    let acerto = 0;
    let indexIntermediario = [...indexDisabled];
    indexIntermediario.push(index);
    setIndexDisabled(indexIntermediario);
    for (let i = 0; i < palavra.length; i++) {
        if (letra === palavra[i]) {
            acerto++;
            palavraVisivelIntermediario[i] = palavra[i];
            setPalavraVisivel(palavraVisivelIntermediario);
        }
    }
    if (acerto === 0) {
        if (erros === 5) {
            console.log("você perdeu");
            setLoss(true);
            setIsAllDisabled(true);
            setPalavraVisivel(palavra);
        }
        setErros(erros + 1);   
    }
    if (!palavraVisivelIntermediario.includes("_ ")) {
        console.log("você ganhou");
        setWin(true);
        setIsAllDisabled(true);       
    }
}