import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{props.label}</label>
            <input className='campo-texto__input' type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto