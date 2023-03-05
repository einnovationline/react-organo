import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    //poderia pegar essa constante backgroundColor: props.corSecundaria e colocar dentro do style sytle={css}
    const css = { backgroundColor: props.corSecundaria }

    //pprops.colaboradores.length > 0 && é uma renderização condicional, se a condição a direita satisfazer ele faz após o &&
    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 sytle={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem   }/>)}
                </div>
                
        </section>
    )
}

export default Time