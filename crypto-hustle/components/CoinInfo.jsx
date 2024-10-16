/**to query & display coin prices & images */

import React, {useEffect, useState} from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

/**CoinInfo component: takes image, name, & symbol as props */
const CoinInfo = ({image, name, symbol}) => {

    //state variable for price set to null
    const [price, setPrice] = useState(null)

    //useEffect() hook passing in 'symbol' in closing []
    //so that instead of useEffect running on every render, it runs when the symbol we pass in changes
    //everytime we give a new coin symbol to get the info for, useEffect() hook will run again
    useEffect(() => {

    }, [symbol]);
}