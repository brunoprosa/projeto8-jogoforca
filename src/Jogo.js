import PalavraSorteada from "./PalavraSorteada";

export default function Jogo(props) {
    return (
        <div className="jogo">
            <img src={props.erro} />
            <button className="escolherPalavra" onClick={props.escolher} > Escolher palavra </button>
            <PalavraSorteada palavra = {props.palavra} />
        </div>
    );
}