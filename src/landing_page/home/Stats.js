import React from 'react'

function Stats() {
    return ( 
        <div className='container'>
            <div className='row p-4'>
                <div className='col-6 p-5'>
                  <h1 className='fs-2'>Trust with confidence</h1>
                  <h2 className='fs-4 mt-5'>Customer-first always</h2>
                  <p className='mb-4 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                  <h2 className='fs-4'>
                  No spam or gimmicks</h2>
                  <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                  <h2 className='fs-4'>The Zerodha universe</h2>
                  <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                  <h2 className='fs-4'>Do better with money</h2>
                  <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img style={{width:'100%'}} src='/media/images/ecosystem.png' alt='stats'></img>
                
                   <a className='mx-5' style={{textDecoration:'none'}} href=''>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                   
                </div><a style={{textDecoration:'none'}} href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
     );
}

export default Stats;