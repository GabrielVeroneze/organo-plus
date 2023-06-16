import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    const handleClick = () => {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: handleClick
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='colaborador__deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='colaborador__cabecalho' style={{backgroundColor: corDeFundo}}>
                <img className='colaborador__imagem' src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{colaborador.nome}</h4>
                <h5 className='colaborador__cargo'>{colaborador.cargo}</h5>
                <div className='colaborador__favoritar'>
                    {colaborador.favorito ? (
                        <AiFillHeart {...propsFavorito} color='#FF0000' />
                    ) : (
                        <AiOutlineHeart {...propsFavorito} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Colaborador