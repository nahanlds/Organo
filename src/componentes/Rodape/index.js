import './rodape.css'

const Rodape = () => {
    return(
    <div className='rodape'>
        <div className='rodapeSociais'>
            <a href='#'><img src="/imagens/fb.png" alt="logo do facebook"/></a>
            <a href='#'><img src="/imagens/ig.png" alt="logo do instagram"/></a>
            <a href='#'><img src="/imagens/tw.png" alt="logo do twitter"/></a>
            
            
        </div>
        <div className='rodapeLogo'>
            <img src="/imagens/logo.png" alt="logo do organo"/>
        </div>
        <div>
            <p>Desenvolvido por Nathan</p>
        </div>

    </div>

    )
}

export default Rodape