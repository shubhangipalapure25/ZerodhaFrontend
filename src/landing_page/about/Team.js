import React from "react";

function Team() {
  return (
    <div className="container p5 mb-5">
      <div className="row">
        <h1 className=" text-center p5 mb-4 ms-5">People </h1>

        <div className="col-6 mt-5 text-center ps-5 text-muted" >
          <img
            src="/media/images/nithin-kamath.jpg"
            alt="Founder"
            style={{ width: "60%", borderRadius: "100%",}}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div
          className="col-6 mt-5 pe-5"
          style={{ fontSize: "17px", lineHeight: "1.8" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href="">Homepage</a> /<a href=""> TradingQnA</a> /<a href=""> Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
