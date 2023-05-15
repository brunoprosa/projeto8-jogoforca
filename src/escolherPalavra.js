import palavras from "./palavras";

export default function escolherPalavra(
    setPalavra, setPalavraVisivel, setErros, setIsAllDisabled, setIndexDisabled, setWin, setLoss
    ) {
    function randomizer() {
      return Math.random() - 0.5;
    }

    palavras.sort(randomizer); //embaralhar as palavras
    let palavraSorteada = palavras[0]; //escolher uma palavra  
    let palavraIntermediario = [];
    let palavraVisivelIntermediario = [];

    for (let i = 0; i < palavraSorteada.length; i++) {
      palavraIntermediario.push(palavraSorteada[i]); //separar cada letra da palavra como um elemento de array
      palavraVisivelIntermediario.push("_ "); //criar os espaços para cada letra
    }
    console.log(palavraIntermediario); 
    setErros(0);
    setPalavra(palavraIntermediario);
    setPalavraVisivel(palavraVisivelIntermediario);
    setIndexDisabled([]);
    setIsAllDisabled(false);
    setLoss(false);
    setWin(false);
  }