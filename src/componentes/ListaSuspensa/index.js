import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoSelecionado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='lista'>
            <label className='lista__label'>{props.label}</label>
            <select value={props.valor} onChange={aoSelecionado} className='lista__menu' required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa