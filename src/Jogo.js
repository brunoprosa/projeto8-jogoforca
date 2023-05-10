import { useState } from "react";
import palavras from "./palavras";

export default function Jogo(props) {
    const [arrayPalavra, setArrayPalavra] = useState([]);
    function escolherPalavra() {
        function randomizer() {
            return Math.random() - 0.5;
        }

        palavras.sort(randomizer); //embaralhar as palavras
        let palavraSorteada = palavras[0]; //escolher uma palavra
        let arrayPalavraIntermediario = []

        for (let i = 0; i < palavraSorteada.length; i++) {
            arrayPalavraIntermediario.push(palavraSorteada[i]); //separar cada letra da palavra como um elemento de array
        }

        setArrayPalavra(arrayPalavraIntermediario);
    }

    function PalavraSorteada(props) {
        return (
            <div className="palavraSorteada">
                {props.palavra.map((l) => "_ ")}
            </div>
        );
    }

    return (
        <div className="jogo">
            <img src="./assets/forca0.png" />
            <button className="escolherPalavra" onClick={escolherPalavra} > Escolher palavra </button>
            <PalavraSorteada palavra = {arrayPalavra} />
        </div>
    );
}