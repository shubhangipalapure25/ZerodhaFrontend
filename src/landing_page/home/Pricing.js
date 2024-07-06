import React from 'react'

function Pricing() {
    return (  
    <div className='container'>
        <div className='row ms-5 me-2'>
            <div className='col-5 p-4'>
                <h1 className='mb-4'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                <a style={{textDecoration:'none'}} href=''>see pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='col-1'></div>
            <div className='col-6 p-4 '>
                <div className='row text-center'>
                    <div className='col border p-3'>
                        <h1 className='mb-4'>₹0</h1>
                        <p >Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col border p-3'>
                        <h1 className='mb-4'>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Pricing;
