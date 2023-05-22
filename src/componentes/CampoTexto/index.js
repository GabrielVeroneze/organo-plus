import './CampoTexto.css'

// Um componente de entrada de texto que é usado pelo formulário
const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        // Chama a função 'aoAlterado' e passa como parâmetro o novo valor, a função é usada para atualizar o estado do componente pai com o novo valor
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label className='campo-texto__label'>{props.label}</label>
            <input 
                // Define o valor inicial do campo de texto, com base no valor passado através da propriedade 'valor' do componente 'CampoTexto'
                value={props.valor}
                // Adiciona o evento 'onChange' no input, portanto, quando o valor do campo de texto for alterado pelo usuário, a função 'aoDigitado' será executada
                onChange={aoDigitado}
                required={props.obrigatorio}
                className='campo-texto__input'
                type="text"
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto