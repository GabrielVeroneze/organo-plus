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
                // Adiciona uma classe base e uma classe dinâmica, ela depende do valor da props 'type', por exemplo: se o seu valor for 'color' a classe será 'campo__input--color'
                className={`campo__input campo__input--${type}`}
                // Determina o tipo do <input> baseado no valor da props 'type', se a props não for passada para o componente seu valor padrão será 'text'
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo