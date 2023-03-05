import './Botao.css'

//props é uma constante
const Botao = (props) => {
    return (<button className='botao'>
                {props.children}
            </button>
    )
}
//o children -filho, irá pegar o valor que está no Formulario/index.js
export default Botao