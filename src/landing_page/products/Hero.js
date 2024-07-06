import React from 'react'

function Hero() {
    return ( 
        <div className='container mt-5 mb-5 border-bottom'>
            <div className='row text-muted p-5 mb-5 text-center'>
                <h1>Technology</h1>
                <h4 className='fs-5 mt-2'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-4'>Check out our <a href='#' style={{textDecoration:'none'}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;