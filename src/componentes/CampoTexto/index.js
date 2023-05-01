import './CampoTexto.css'

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>Nome</label>
            <input className='campo-texto__input' type="text" placeholder='Digite seu nome' />
        </div>
    )
}

export default CampoTexto