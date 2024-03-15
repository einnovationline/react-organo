import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborador.css'

//invés de usar o props (que tem tudo) já passo somente as propriedades que preciso
const Colaborador = ({nome, cargo, imagem, corDeFundo, inDelete}) => {
    const handleDelete = () => {
        inDelete(); // Chama a função inDelete, que chamará deleteCollaborator com o nome do colaborador
    };
    
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={40} className="delete" onClick={handleDelete} />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>    
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}


export default Colaborador