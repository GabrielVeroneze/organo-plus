import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo">
            <label className='campo__label'>{label}</label>
            <input 
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                className={`campo__input campo__input--${type}`}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo