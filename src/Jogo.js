import palavras from "./palavras";

export default function Jogo(props){
    function EscolherPalavra(){

    }

    return(
        <div className="jogo">
            <img src="../public/assets/forca0.png" />
            <button className="escolherPalavra" onClick={EscolherPalavra} > Escolher palavra </button>
            <EscolherPalavra />
        </div>
    );
}