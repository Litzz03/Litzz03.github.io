import styles from "./Home.module.css"
import HomeButton from "../../components/HomeButton";
import { TbCoinBitcoin } from "react-icons/tb";
import { MdOutlineCalculate } from "react-icons/md";

function Home(){
    return(
        <section className={styles.home}>
            <HomeButton icon={TbCoinBitcoin} title="Monitor de BitCoin" screenDestination="/BitCoinTracker"/>
            <HomeButton icon={MdOutlineCalculate} title="Conversor de Moedas" screenDestination="/CurrencyConverter"/>
        </section>
    )
}

export default Home
