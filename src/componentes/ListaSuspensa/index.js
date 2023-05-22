import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoSelecionado = (evento) => {
        // Chama a função 'aoAlterado' e passa como parâmetro o novo valor, a função é usada para atualizar o estado do componente pai com o novo valor
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista">
            <label className="lista__label">{props.label}</label>
            <select
                // Define o valor inicial da lista suspensa, com base no valor passado através da propriedade 'valor' do componente 'ListaSuspensa'
                value={props.valor}
                // Adiciona o evento 'onChange' no select, portanto, quando um item da lista for selecionado ou alterado pelo usuário, a função 'aoSelecionado' será executada
                onChange={aoSelecionado}
                className="lista__menu"
                required={props.obrigatorio}
            >
                {props.itens.map(item => (
                    // Cria os elementos <option> dentro do <select>, com base nos itens passados através da propriedade 'itens' do componente 'ListaSuspensa'
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa
