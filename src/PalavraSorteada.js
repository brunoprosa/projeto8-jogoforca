export default function PalavraSorteada(props) {
    let color = "palavraSorteada black";
    if(props.win) {
        color = "palavraSorteada green";
    }else if(props.loss){
        color = "palavraSorteada red";
    }else color = "palavraSorteada black"
    return (
        <div className={color}>
            {props.palavra.map((l) => l)}
        </div>
    );
}