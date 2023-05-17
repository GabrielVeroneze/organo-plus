import './Time.css'

const Time = (props) => {

    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 className='time__titulo'>{props.nome}</h3>
            <div className='time__sublinhado' style={{backgroundColor: props.corPrimaria}}></div>
        </section>
    )
}

export default Time