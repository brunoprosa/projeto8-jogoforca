export default function Letras(props) {
    return (
        <button className="letra" onClick={props.chutar}>{props.letra}</button>
    );
}