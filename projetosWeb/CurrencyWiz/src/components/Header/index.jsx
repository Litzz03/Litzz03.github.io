import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import icon from '/favicon.png'

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <img src={icon}/>
                <Link to="/">                
                    <span>CurrencyWiz</span>
                </Link>
            </div>
            <nav>
                <Link to="/">Página Inicial</Link>
                <Link to="/BitCointracker">Monitor de BitCoin</Link>
                <Link to="/CurrencyConverter">Conversor de Moedas</Link>
            </nav>
        </header>
    )
}

export default Header
