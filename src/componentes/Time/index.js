import './Time.css'

const Time = (props) => {
    return (
        <section className='time'>
            <h3 className='time__titulo'>{props.nome}</h3>
        </section>
    )
}

export default Time