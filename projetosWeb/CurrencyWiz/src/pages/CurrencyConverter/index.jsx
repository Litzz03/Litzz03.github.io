  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import styles from './CurrencyConverter.module.css'
  import arrow from './images/arrow_icon.png'

  const KEY_API =  '3cde942d618dc25bc1e7032582b7031b' 

  function CurrencyConverter() {
    const [coins, setCoins] = useState([]);
    const [coinSelected, setCoinSelected] = useState('');
    const [coinsToSearch, setCoinsToSearch] = useState([]);
    const [result, setResult] = useState(null);

    useEffect(() => {
      const getCoinList = async () => {
        try {
          const response = await axios.get(
            `http://api.currencylayer.com/list?access_key=${KEY_API}`
          );

          if (response.data.success) {
            const coinList = response.data.currencies;
            setCoins(Object.entries(coinList));
          } else {
            console.error('Erro ao obter lista de moedas:', response.data.error.info);
          }
        } catch (error) {
          console.error('Erro ao obter lista de moedas:', error);
        }   
      };

      getCoinList();
    }, []);

    const handleChangeCoin = (event) => {
      setCoinSelected(event.target.value);
    };

    const handleChangeCoinsToSearch = (event) => {
      const selectedCurrencies = Array.from(event.target.selectedOptions, (option) => option.value);
      setCoinsToSearch(selectedCurrencies);
    };

    const getResult = async () => {
      try {
        const response = await axios.get(
          `http://api.currencylayer.com/live?access_key=${KEY_API}&source=${coinSelected}&currencies=${coinsToSearch.join(',')}`
        );

        if (response.data.success) {
          setResult(response.data.quotes);
        } else {
          console.error('Erro ao consultar valores:', response.data.error.info);
        }
      } catch (error) {
        console.error('Erro ao consultar valores:', error);
      }
    };

    return (
      <div className={styles.currencyConverter}>
        <div className={styles.selectSection}>
          <label>Selecione a moeda principal:</label>
          <select onChange={handleChangeCoin} value={coinSelected}>
            <option value="" disabled>
              Selecione uma moeda
            </option>
            {coins.map(([code, name]) => (
              <option key={code} value={code}>
                {name} ({code})
              </option>
            ))}
          </select>
          <label>Selecione as moedas para consultar:</label>
          <select
            multiple
            onChange={handleChangeCoinsToSearch}
            value={coinsToSearch}
          >
            {coins.map(([code, name]) => (
              <option key={code} value={code}>
                {name} ({code})
              </option>
            ))}
          </select>
          <button onClick={getResult}>Consultar Valores</button>
        </div>
        <div className={styles.imageSection}>
          <h1>Conversor de Moeda</h1>
          <img src={arrow}/>
        </div>     
        <div className={styles.resultSection}>
          <h2>Resultados da Consulta:</h2>      
          {result && (
            <div>
              <ul>
                {Object.entries(result).map(([code, value]) => (
                  <li key={code}>
                    {code}: {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }

  export default CurrencyConverter;
