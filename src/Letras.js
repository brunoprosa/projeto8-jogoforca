export default function Letras(props) {
    let {isAllDisabled, indexDisabled, index, chutar,letra} = props
    let isDisabled = isAllDisabled || indexDisabled.includes(index)
    return (
        <button className={isDisabled ? "letra disabled" : "letra"} onClick={chutar} disabled={isDisabled}>{letra}</button>
    );
}