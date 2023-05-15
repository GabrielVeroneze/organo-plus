import './CampoTexto.css'

// Um componente de entrada de texto que é usado pelo formulário
const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} className='campo-texto__input' type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto