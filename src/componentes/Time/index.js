import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

    const Time = (props) => {
        // Verificar se props.color está definido
        const css = props.color ? { backgroundColor: hexToRgba(props.color, '0.6') } : {};

    //pprops.colaboradores.length > 0 && é uma renderização condicional, se a condição a direita satisfazer ele faz após o &&
        return (
            (props.colaboradores.length > 0) && <section className='time' style={css}>
                <input onChange={event => props.changeCollor(event.target.value, props.nome)} type='color' value={props.color} 
                className='input-color' />
                <h3 style={{ borderColor: props.color }}>{props.nome}</h3>
                    <div className='colaboradores'>
                        {props.colaboradores.map(colaborador => {
                            return <Colaborador
                                    corDeFundo={props.color} 
                                    key={colaborador.nome} 
                                    nome={colaborador.nome} 
                                    cargo={colaborador.cargo} 
                                    imagem={colaborador.imagem} //>
                                    inDelete={() => props.inDelete(colaborador.nome)} />//A arrow function é uma função de uma linha que recebe um argumento colaborador e retorna um componente <Colaborador>.
                        })}
                    </div>
            </section>
        )
    }

export default Time