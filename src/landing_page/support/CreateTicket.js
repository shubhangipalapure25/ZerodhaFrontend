import React from 'react'

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row mt-5 text-muted'>
                <h4>To create a ticket, select a relevant topic</h4>

                <div className='col-4 mt-4'>
                <h5><a href='' ><i class="fa-solid fa-circle-plus"></i> Account Opening </a></h5>

                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>Getting started</a></li>
                        <li><a href=''>Online</a></li>
                        <li><a href=''>Offline</a></li>
                        <li><a href=''>Charges</a></li>
                        <li><a href=''>Company, Partnership and HUF</a></li>
                        <li><a href=''>Non Resident Indian (NRI)</a></li>
                    </ol>
                </div>

                <div className='col-4 mt-4'>
                <h5><a href=''> <i class="fa-solid fa-person"></i> Your Zerodha Account</a></h5>
                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>Login credentials</a></li>
                        <li><a href=''>Your Profile</a></li>
                        <li><a href=''>Account modification and segment addition</a></li>
                        <li><a href=''>CMR & DP ID</a></li>
                        <li><a href=''>Nomination</a></li>
                        <li><a href=''>Transfer and conversion of shares</a></li>
                    </ol>
                </div>
             <div className='col-4 mt-4'>
                <h5><a href=''><i class="fa-regular fa-display-chart-up"></i>  Trading and Markets</a></h5>
                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>Trading FAQs</a></li>
                        <li><a href=''>Kite</a></li>
                        <li><a href=''>Margins</a></li>
                        <li><a href=''>Product and order types</a></li>
                        <li><a href=''>Corporate actions</a></li>
                        <li><a href=''>Kite features</a></li>
                    </ol>
                </div>

                <div className='col-4 mt-4'>
                <h5><a href=''> <i class="fa-regular fa-folder"></i>Funds</a></h5>
                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>Fund withdrawal</a></li>
                        <li><a href=''>Adding funds</a></li>
                        <li><a href=''>Adding bank accounts</a></li>
                        <li><a href=''>eMandates</a></li>
                       
                    </ol>
                </div>
                <div className='col-4 mt-4'>
                <h5><a href=''> <i class="fa-regular fa-copyright"></i> Console</a></h5>
                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>IPO</a></li>
                        <li><a href=''>Portfolio</a></li>
                        <li><a href=''>Funds statement</a></li>
                        <li><a href=''>Profile</a></li>
                        <li><a href=''>Reports</a></li>
                        <li><a href=''>Referral program</a></li>
                     </ol>
                </div>
                <div className='col-4 mt-4'>
                <h5><a href=''> <i class="fa-regular fa-copyright"></i>Coin</a></h5>
                    <ol style={{listStyleType:'none'}}>
                        <li><a href=''>Understanding mutual funds and Coin
                        </a></li>
                        <li><a href=''>Coin app</a></li>
                        <li><a href=''>Coin web</a></li>
                        <li><a href=''>Transactions and reports</a></li>
                        <li><a href=''>National Pension Scheme (NPS)</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;