import React from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";

function Currency() {
    return (
        <div className='currency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: 'white', color: 'goldenrod', width: '100%', textAlign: 'center', }}>
                <h3>CURRENCY CONVERTER</h3>
            </div>
            <div style={{ marginTop: '50px', alignItems: 'center', justifyContent: 'center' }}>
                <input type="number" className="amount" />
                <select className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>
                <FaLongArrowAltRight style={{ fontSize: '25px', marginRight: '10px', color: 'white' }} />
                <select className="to-currency-option">
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input type="number" className="result" />
            </div>
            <div className='exchange-button'>
                <button style={{ backgroundColor: 'gold' }}>Convert</button>
            </div>
        </div>
    )
}

export default Currency