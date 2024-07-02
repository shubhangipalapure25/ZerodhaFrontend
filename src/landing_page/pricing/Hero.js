import React from 'react'

function Hero() {
    return ( 
    <div className='container mt-5 '>
        <div className='row text-center p-5'>
            <h1>Pricing</h1>
            <h4 className='text-muted fs-5'>Free equity investments and flat ₹20 intraday and F&O trades</h4>
                </div>

        <div className='row border-top mt-4 pt-5'>
        <div className='col-4 p-3'>
            <img src='/media/images/pricing-eq.svg' alt='pricingimg'/>
            <h2>Free equity delivery</h2>
            <p className='mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-3'>
        <img src='/media/images/other-trades.svg' alt='pricingimg'/>
            <h2>Intraday and F&O trades</h2>
            <p> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 p-3'> <img src='/media/images/pricing-eq.svg' alt='pricingimg'/>
            <h2>Free direct MF</h2>
            <p> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p></div>
            </div>       
      
    </div>
     );
}

export default Hero;