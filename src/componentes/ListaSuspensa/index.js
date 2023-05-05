import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    // console.log(props)
    const itens = props.time
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {itens.map((item) => {
                    return <option key={item.id}>{item.time}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa