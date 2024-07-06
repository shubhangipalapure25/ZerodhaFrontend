
 import React from "react";

function RightSection({
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
          
          <div className="col-6 mt-5 " style={{width:'400px'}} >
            <h1 className="mt-5">{productTitle}</h1>
            <p className="mt-4 pe-5" style={{lineHeight:'1.7'}}>{productDescription}</p>
           
           <div className="mt-4 fs-6">
            <a href={learnMore} style={{textDecoration:'none'}}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
              </div>

            <div className="col-6 offset-1 mb-5">
            <img src={imageURL} alt='productimage' />
          </div>
        </div>
    </div>
  );
}

export default RightSection;
