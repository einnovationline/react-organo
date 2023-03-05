import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    //console.log(props.itens)
    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.alterado(evento.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
                
//{props.itens.map(item => {return <option>{item}</option>})}//outra forma de fazer
//<div className="lista-suspensa"> estava com o S maíusculo e o CSS é sensitivo, e lá estava com minúsculo
//na linha 11 fazer com dados q venham do banco

export default ListaSuspensa