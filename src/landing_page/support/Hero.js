import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid'>
            <div className='row' style={{backgroundColor:'rgb(0, 110, 255)', color:'white', height:'450px'}}>
            <div className='col-7 mt-5' style={{paddingLeft:'100px'}}>
                <h5 >Support Portal</h5>
                <h3 className='mt-5 mb-4 '>Search for an answer or browse help topics to create a ticket</h3>
                <input type='search' style={{width:'700px', height:'50px', border:'none'}} placeholder='Eg: how do i activate F&O, why my order getting rejected...'/>
               <p style={{marginTop:'25px'}} >               
                 <a href='' style={{color:'white', fontSize:'18px', marginRight:'25px'}} >Track account opening</a>
                <a href='' style={{color:'white', fontSize:'18px', marginRight:'25px'}} > Track segment activation</a>
                <a href='' style={{color:'white', fontSize:'18px', marginRight:'25px'}} > Intraday margins</a><br/><br/>
                <a href='' style={{color:'white', fontSize:'18px', marginRight:'25px'}}>Kite user manual</a>
                </p>

            </div>
            <div className='col-5 mt-5 ps-5 '>
               <p style={{marginLeft:'250px'}}> <a href='' style={{color:'white', fontSize:'18px'}}>Track ticket</a></p>
               <h4 className='mb-3 mt-5 pt-5'>Featured</h4>
           <ol type='Number' >
           
            <li className='mb-3'><a href='' style={{color:'white', fontSize:'18px', marginRight:'25px', textDecoration:'underline'}}>Current Takeovers and Delisting - June 2024</a></li>
            <li><a href='' style={{color:'white', fontSize:'18px', marginRight:'25px', textDecoration:'underline'}}>Latest Intraday leverages and Square-off timings</a></li>

           </ol>
            </div>

            </div>
        </div>
     );
}

export default Hero;