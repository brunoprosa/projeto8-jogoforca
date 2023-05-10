export default function Letras(props) {
    return (
        <button className="letra" onClick={() => chutarLetra(props.letra)} disabled>{props.letra}</button>
    );
}