import './Time.css'

const Time = (props) => {

    console.log(props.corPrimaria, props.corSecundaria);

    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 className='time__titulo'>{props.nome}</h3>
        </section>
    )
}

export default Time