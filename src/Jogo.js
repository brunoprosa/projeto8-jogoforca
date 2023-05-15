import PalavraSorteada from "./PalavraSorteada";

export default function Jogo(props) {
    return (
        <div className="jogo">
            <img data-test="game-image" src={props.erro} />
            <button className="escolherPalavra" onClick={props.escolher} data-test="choose-word" > Escolher palavra </button>
            <PalavraSorteada palavra = {props.palavra} win = {props.win} loss = {props.loss} />
        </div>
    );
}