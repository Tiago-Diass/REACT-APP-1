import { useState } from 'react'
import heroImg from './assets/hero.png'

function Header() {
    return (
        <div>
            <img src={heroImg} className="png" width="170" alt="" />
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header