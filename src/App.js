import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import escolherPalavra from "./escolherPalavra";
import chutarLetra from "./chutarLetra";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const imagemErros = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  const [palavraVisivel, setPalavraVisivel] = useState([]);
  const [palavra, setPalavra] = useState([]);
  const [erros, setErros] = useState(0);

  return (
    <div className="app">
      <Jogo erro={imagemErros[erros]} escolher={() => escolherPalavra(setPalavra, setPalavraVisivel)} palavra={palavraVisivel} />
      <div className="ajuste">
        <div className="teclado">
          {alfabeto.map((l) => <Letras key={l} letra={l} chutar={() => chutarLetra(l, palavra, palavraVisivel, setPalavraVisivel, erros, setErros)} />)}
        </div>
      </div>
    </div>
  );
}