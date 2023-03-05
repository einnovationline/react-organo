import './Time.css'

const Time = (props) => {
    //poderia pegar essa constante css e colcar dentro do style sytle={css}
    //cont css = { backgroundColor: props.corSecundaria }
    return (
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 sytle={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Time