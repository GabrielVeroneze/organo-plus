import './Colaborador.css'

// O componente recebe as propriedades nome, cargo, imagem e corDeFundo por meio de um objeto desestruturado como parâmetro da função
const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {

    return (
        <div className='colaborador'>
            <div className='colaborador__cabecalho' style={{backgroundColor: corDeFundo}}>
                <img className='colaborador__imagem' src={imagem} alt={nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{nome}</h4>
                <h5 className='colaborador__cargo'>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador