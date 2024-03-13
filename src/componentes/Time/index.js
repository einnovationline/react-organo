import Colaborador from '../Colaborador'
import './Time.css'

    const Time = (props) => {
    //poderia pegar essa constante backgroundColor: props.corSecundaria e colocar dentro do style sytle={css}
    const css = { backgroundColor: props.corSecundaria }

    //pprops.colaboradores.length > 0 && é uma renderização condicional, se a condição a direita satisfazer ele faz após o &&
        return (
            (props.colaboradores.length > 0) && <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                    <div className='colaboradores'>
                        {props.colaboradores.map(colaborador => {
                            console.log(<Colaborador 
                                corDeFundo={props.corPrimaria} 
                                key={colaborador.nome} 
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem} 
                                inDelete={colaborador.inDelete} /> // Aqui estamos repassando inDelete para o componente Colaborador
                            )

                            return <Colaborador
                                    corDeFundo={props.corPrimaria} 
                                    key={colaborador.nome} 
                                    nome={colaborador.nome} 
                                    cargo={colaborador.cargo} 
                                    imagem={colaborador.imagem} //>
                                    inDelete={colaborador.inDelete} />//A arrow function é uma função de uma linha que recebe um argumento colaborador e retorna um componente <Colaborador>.
                        })}
                    </div>
            </section>
        )
    }

export default Time