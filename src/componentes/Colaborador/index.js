import './Colaborador.css'

//invés de usar o props (que tem tudo) já passo somente as propriedades que preciso
const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img scr={imagem} alt={nome}/>
            </div>    
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}


export default Colaborador