import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape__caixa'>
                <div className='rodape__social'>
                    <a href="#"><img src="/imagens/fb.png" alt="Icone do Facebook" /></a>
                    <a href="#"><img src="/imagens/tw.png" alt="Icone do Twitter" /></a>
                    <a href="#"><img src="/imagens/ig.png" alt="Icone do Instagram" /></a>
                </div>
                <img className='rodape__logo' src="/imagens/logo.png" alt="Logo do Organo" />
                <p className='rodape__creditos'>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape