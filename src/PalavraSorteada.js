export default function PalavraSorteada(props) {
    return (
        <div className="palavraSorteada">
            {props.palavra.map((l) => l)}
        </div>
    );
}