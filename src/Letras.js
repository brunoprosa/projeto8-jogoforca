export default function Letras(props){
    return (
        <div className="teclado">
            <button className="letra" onClick={() => checkarLetra(props.letra)} disabled>{props.letra}</button>
        </div>
    );
}