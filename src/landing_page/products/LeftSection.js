import React from "react";

function LeftSection({
  imageURL,
  productTitle,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  coin,
}) {
  return (
    <div className="container mt-5 mb-5">
        <div className="row mb-5">
          <div className="col-6 pe-5">
            <img src={imageURL} alt='productimage'/>
          </div>
          <div className="col-6 p-5 offset-1"  style={{width:'450px'}}>
            <h1 >{productTitle}</h1>
            <p className="mt-4" style={{lineHeight:'1.7'}}>{productDescription}</p>
           
            {(tryDemo!=undefined && learnMore!=undefined ) && (<div className="mt-4 fs-6">           
            <a href={tryDemo} style={{marginRight:'90px', textDecoration:'none'}}>Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{textDecoration:'none'}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>)}

           {coin !=undefined && (<div className="mt-4 fs-6">
            <a href={coin} style={{textDecoration:'none'}}>Coin <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>)}

             <div className="mt-4" >
             <a href={googlePlay} style={{marginRight:'20px'}}><img src='/media/images/google-play-badge.svg'/></a>
            <a href={appStore}><img src='/media/images/appstore-badge.svg'/></a>
             </div>
            </div>

        </div>
    </div>
  );
}

export default LeftSection;
