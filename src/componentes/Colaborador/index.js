import './Colaborador.css'

const Colaborador = () => {
    
    return (
        <div className='colaborador'>
            <div className='colaborador__destaque'>
                <img className='colaborador__imagem' src="https://github.com/viniciosneves.png" alt="" />
            </div>
            <div className='colaborador__info'>
                <h4 className='colaborador__nome'>Gabriel Veroneze</h4>
                <h5 className='colaborador__cargo'>Desenvolvedor Python e JavaScript na Alura</h5>
            </div>
        </div>
    )
}

export default Colaborador