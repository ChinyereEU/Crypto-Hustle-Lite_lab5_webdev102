import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CoinInfo from './components/CoinInfo';

/**import env variable*/
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  /**'list' useState() variable */
  const [list, setList] = useState(null)

  /**useEffect() hook */
  useEffect(() => {

    /**async func that uses fetch to make call to API */
    const fetchAllCoinData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?&api_key` + API_KEY
      );
      /**save JSON response returned to the list state variable */
      const json = await response.json();
      setList(json);
    }

    /**call fetchAllCoinData() & handle any errors that could pop up with it */
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    /**return and render on page, after making hook & calling API (outside return()) */
    <div className="whole-page">
      <h1>My Crypto List</h1>
      {/**ul list to display each coin */}
      <ul>
        {/**check if API is still waiting on results, only fill up list when API call is returned */}
        {/**use Object.entries() to get an array of key-value pairs from list.Data */}
        {list && Object.entries(list.Data).map(([coin]) => {
          list.Data[coin].PlatformType === "blockchain" ? (
            <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
          ) : null
        })}
      </ul>
    </div>
  )
};

export default App;
