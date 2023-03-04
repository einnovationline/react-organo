import CampoTexto from '../CampoTexto'
import './formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha seus dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua Imagem" />
            </form>

        </section>

    )

}

export default Formulario