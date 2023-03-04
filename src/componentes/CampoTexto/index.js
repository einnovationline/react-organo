import './CampoTexto.css'

//props é uma variável 
const CampoTexto = (props) => {
    //console.log(props.label)

    //é uma crase `` e não aspas
    const placeholderModificada = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada}></input>
        </div>

    )
}

export default CampoTexto