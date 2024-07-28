import React, { useState } from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

let Base_Url = "https://api.freecurrencyapi.com/v1/latest";
let Api_Key = "fca_live_RxOKBzMo79VgcAy1XlgrQYc4xsfP1aBh6YgT3cPw";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        const response = await axios.get(`${Base_Url}?apikey=${Api_Key}&base_currency=${fromCurrency}`);
        const result = ((response.data.data[toCurrency]) * amount).toFixed(2);
        setResult(result);
    }
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'white', color: 'goldenrod', width: '100%', textAlign: 'center', }}>
                <h3>CURRENCY CONVERTER</h3>
            </div>
            <div style={{ marginTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
                <input type="number"
                    value={amount} onChange={(e) => setAmount(e.target.value)}
                    className="amount" />
                <select
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaLongArrowAltRight style={{ fontSize: '25px', marginRight: '10px', color: 'white' }} />
                <select
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="to-currency-option">
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input
                    value={result} onChange={(e) => setResult(e.target.value)}
                    type="number" className="result" />
            </div>
            <div className='exchange-button'>
                <button
                    onClick={exchange}
                    style={{ backgroundColor: 'gold' }}>Convert</button>
            </div>
        </div>
    )
}

export default Currency