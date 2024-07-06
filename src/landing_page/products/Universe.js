import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row  p-5 text-center">
        <h1>The Zerodha Universe</h1>
        <h4 className="fs-6 mt-4 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </h4>
        <div className="row mt-4">
          <div className="col-4 mt-4">
            <a href="">
              <img src="/media/images/smallcase-logo.png" alt="Logo1" />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 mt-4">
            <a href="">
              <img
                src="/media/images/streak-logo.png"
                alt="Logo2"
                style={{ width: "50%" }}
              />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Algo & strategy platform
            </p>
          </div>
          <div className="col-4 mt-4">
            <a href="">
              <img
                src="/media/images/sensibull-logo.svg"
                alt="Logo3"
                style={{ width: "70%" }}
              />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Options trading platform
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-4 mt-4">
            <a href="">
              <img
                src="/media/images/zerodhafundhouse.png"
                alt="Logo1"
                style={{ width: "60%" }}
              />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Asset management
            </p>
          </div>
          <div className="col-4 mt-4">
            <a href="">
              <img
                src="/media/images/tijori.svg"
                alt="Logo2"
                style={{ width: "45%" }}
              />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Fundamental research platform
            </p>
          </div>
          <div className="col-4 mt-4">
            <a href="">
              <img
                src="/media/images/ditto-logo.png"
                alt="Logo3"
                style={{ width: "40%" }}
              />
            </a>
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Insurance
            </p>
          </div>
        </div>

        <div className="mt-4">
        <button className='btn btn-primary mt-3 mb-5' style={{width:'18%', fontSize:'20px', fontWeight:'600'}}>Sign up now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
