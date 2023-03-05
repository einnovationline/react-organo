import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()//o comportamento padrão seria após o botão submit a página ser recarregada, com o preventDefault não permite
        //console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.colaboradorCadastrado({nome,cargo,imagem,time})
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha seus dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da sua Imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao> Criar um Card </Botao>
            </form>
        </section>
    )
}

//a constante obrigatoria é referenciada no index.js do Campo texto e da listaSuspensa

export default Formulario