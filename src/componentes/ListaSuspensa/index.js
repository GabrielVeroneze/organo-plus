import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista'>
            <label className='lista__label'>{props.label}</label>
            <select className='lista__menu'>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa