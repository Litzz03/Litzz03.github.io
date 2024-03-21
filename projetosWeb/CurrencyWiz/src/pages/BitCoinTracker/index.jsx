import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BitCoinTracker.module.css';

const API_LINK = 'https://api.blockchain.com/v3/exchange/tickers/BTC-USD';

function BitCoinTracker() {
  const [dataBitCoin, setDataBitCoin] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDataBitCoin = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_LINK);

      const lastTradePrice = response.data.price_24h;
      const volume24h = response.data.volume_24h;

      setDataBitCoin({
        currentPrice: lastTradePrice,
        volumeLast24h: volume24h,
      });
    } catch (error) {
      console.error('Erro ao buscar dados do BitCoin:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataBitCoin(); // Chame imediatamente para obter os dados inicialmente

    const interval = setInterval(() => {
      fetchDataBitCoin(); // Chame dentro do intervalo para obter dados a cada 60 segundos
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonUpdateClick = () => {
    setDataBitCoin(null);
    fetchDataBitCoin();
  };

  return (
    <section className={styles.bitCoinTracker}>
      <h2>Cotação BitCoin</h2>
      <div className={styles.results}>
        <p className={styles.price}>Preço Atual: {dataBitCoin?.currentPrice}</p>
        <p className={styles.variation}>Variação das últimas 24H: {dataBitCoin?.volumeLast24h}</p>
      </div>
      <button
        className={`${styles.button} ${loading ? styles.loading : ''}`}
        onClick={handleButtonUpdateClick}>
        {loading ? 'Atualizando...' : 'Atualizar'}
      </button>
    </section>
  );
}

export default BitCoinTracker;
