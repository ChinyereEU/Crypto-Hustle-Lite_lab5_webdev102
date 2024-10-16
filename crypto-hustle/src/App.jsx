import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

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
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" + API_KEY
      );
      /**save JSON response returned to the list state variable */
      const json = await response.json();
      setList(json);
    }

    /**call fetchAllCoinData() & handle any errors that could pop up with it */
    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    
  )
};

export default App;
