import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="/media/images/products-kite.png"
        productTitle="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection imageURL="/media/images/products-console.png"
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""/>

      <LeftSection
        imageURL="/media/images/products-coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        coin=""
      
        googlePlay=""
        appStore=""
      />
      <RightSection
      imageURL="/media/images/products-kiteconnect.png"
      productTitle="Kite Connect API"
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      learnMore=""/>
      <LeftSection
        imageURL="/media/images/varsity-products.png"
        productTitle="Varsity mobileKite"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        
        googlePlay=""
        appStore=""
      />
      <p className="mb-5 mt-5 text-center fs-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </div>
  );
}

export default ProductPage;
