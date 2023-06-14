import './Campo.css'

const Campo = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo">
            <label className='campo__label'>{props.label}</label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                className='campo__input'
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Campo