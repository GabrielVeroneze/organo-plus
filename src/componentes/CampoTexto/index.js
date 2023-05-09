import './CampoTexto.css'

const CampoTexto = (props) => {

    let valor = ''

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} className='campo-texto__input' type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto