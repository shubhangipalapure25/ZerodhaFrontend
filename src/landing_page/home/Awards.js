import React from 'react'

function Awards() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6 p-4'>
                    <img className='mt-4' style={{width:'80%'}} src='/media/images/largest-broker.svg' alt='brokerimg' ></img>
                </div>
                <div className='col-6 p-4'>
                    <h1 className='mb-4'>Largest stock broker in India</h1>
                    <p className='mb-4'> 1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row mb-3'>
                    <div className='col-6'>
                    <ul>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                   </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li><p>Stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. Securities</p></li>
                    </ul>
                    </div>
                </div>
                <img style={{width:'98%'}} src='/media/images/press-logos.png' alt='press img'></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;