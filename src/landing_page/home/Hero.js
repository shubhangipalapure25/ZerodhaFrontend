import React from 'react'
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
         <div className='row text-center '>
            <div className='col'>
                <img src='/media/images/landing.png' alt='langingimg' style={{width:'70%'}}></img>
                <h1 className='mt-5' style={{fontSize:'50px'}}>Invest in everything</h1>
                <p style={{fontSize:'20px'}}>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary mt-3 mb-5' style={{width:'18%', height:'9%', fontSize:'20px', fontWeight:'600'}}>Sign up now</button>
            </div>
         </div>
        </div>
     );
}

export default Hero;
