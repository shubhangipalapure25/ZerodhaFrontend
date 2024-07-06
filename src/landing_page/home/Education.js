import React from 'react'
function Education() {
    return ( 
        
        <div className='container mt-5'>
            <div className='row p-4'>
                <div className='col-6'>
                    <img style={{width:'85%'}} src='/media/images/index-education.svg' alt='educationimg'></img>
                </div>
               <div className='col-6 mb-5'>
                <h3 className='mb-4'>Free and open market education</h3>
                <p >Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a  style={{textDecoration:'none'}} href=''>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a  style={{textDecoration:'none'}} href=''>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
               </div>

            </div>
        </div>
     );
}

export default Education;