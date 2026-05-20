import "./Header.css"
import heroImg from './assets/hero.png'

function Header() {
    return (
        <div>
            <logo><img src={heroImg} alt="Hero Vite" /></logo>
            <nav>
                <a href="/home">HOME</a>
                <a href="/contatos">CONTACTOS</a>
            </nav>
        </div>
    )
}

export default Header