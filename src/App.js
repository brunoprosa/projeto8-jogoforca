import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    return (
        <div className="app">
            <Jogo />
            <Letras />
        </div>
    );
}