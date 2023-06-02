import './Banner.css'

export const Banner = () => {
    return (
        <header className='banner'>
            <div className='banner__caixa'>
                <img className='banner__logo' src="/imagens/logo.png" alt="Logo do Organo" />
                <h1 className='banner__titulo'>
                    Pessoas e times <span className='banner__titulo--inferior'>organizados em um só lugar!</span>
                </h1>
            </div>
        </header>
    )
}
