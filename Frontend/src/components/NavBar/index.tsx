import logo from '../../assets/logo-economize 1.png'
import style from "./navBar.module.scss"

export default function NavBar() {
    return (
        <div className={style.NavContainer}>
            <nav className={style.NavBar}>
                <div>
                    <img src={logo} />
                </div>

                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Faça seu login</a></li>
                    <li><a href='#'>Crie seu Login</a></li>
                    <li><a href='#'>Quem somos</a></li>
                </ul>
            </nav>
        </div>
    )
}