import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburguer from "../images/hamburguer.svg";
import close from "../images/close.svg";
import arrow from "../images/arrow-dark.svg";
import arrowLight from "../images/arrow-light.svg";

function Main() {
  const [open, setOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);

  return (
    <main className="main">
      <nav className="main__nav">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="blogr" className="main__nav--logo" />
          <div className="main__menu--open bigscreen">
            <div className="main__menu--links">
              <div
                className="main__menu--ref "
                onClick={() => setOpenProducts(!openProducts)}
              >
                <h2>Product</h2>
                <img
                  src={arrowLight}
                  alt="arrow"
                  className={
                    openProducts ? "main__menuImg--open" : "main__menuImg"
                  }
                />
              </div>
              {openProducts ? (
                <div className="main__menu--openLinks">
                  <a href="/">Overview</a>
                  <a href="/">Pricing</a>
                  <a href="/">Marketplace</a>
                  <a href="/">Features</a>
                  <a href="/">Integrations</a>
                </div>
              ) : null}
            </div>
            <div className="main__menu--links">
              <div
                className="main__menu--ref"
                onClick={() => setOpenCompany(() => !openCompany)}
              >
                <h2>Company</h2>
                <img
                  src={arrowLight}
                  alt="arrow"
                  className={
                    openCompany ? "main__menuImg--open" : "main__menuImg"
                  }
                />
              </div>
              {openCompany ? (
                <div className="main__menu--openLinks">
                  <a href="/">About</a>
                  <a href="/">Team</a>
                  <a href="/">Blog</a>
                  <a href="/">Careers</a>
                </div>
              ) : null}
            </div>
            <div className="main__menu--links">
              <div
                className="main__menu--ref"
                onClick={() => setOpenConnect(() => !openConnect)}
              >
                <h2>Connect</h2>
                <img
                  src={arrowLight}
                  alt="arrow"
                  className={
                    openConnect ? "main__menuImg--open" : "main__menuImg"
                  }
                />
              </div>
              {openConnect ? (
                <div className="main__menu--openLinks">
                  <a href="/">Contact</a>
                  <a href="/">Newsletter</a>
                  <a href="/">LinkedIn</a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="main__menu--logBtn bigscreen">
          <button className="login__btn bigscreen">Login</button>
          <button className="signup__btn bigscreen">Sign Up</button>
        </div>
        {open ? (
          <>
            <img
              src={close}
              alt="menu"
              className="main__nav--menuBtn"
              onClick={() => setOpen(!open)}
            />
            <div className="main__menu--open">
              <div className="main__menu--links">
                <div className="main__menu--ref">
                  <h2 onClick={() => setOpenProducts(!openProducts)}>
                    Product
                  </h2>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={
                      openProducts ? "main__menuImg--open" : "main__menuImg"
                    }
                  />
                </div>
                {openProducts ? (
                  <div className="main__menu--openLinks">
                    <a href="/">Overview</a>
                    <a href="/">Pricing</a>
                    <a href="/">Marketplace</a>
                    <a href="/">Features</a>
                    <a href="/">Integrations</a>
                  </div>
                ) : null}
              </div>
              <div className="main__menu--links">
                <div className="main__menu--ref">
                  <h2 onClick={() => setOpenCompany(() => !openCompany)}>
                    Company
                  </h2>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={
                      openCompany ? "main__menuImg--open" : "main__menuImg"
                    }
                  />
                </div>
                {openCompany ? (
                  <div className="main__menu--openLinks">
                    <a href="/">About</a>
                    <a href="/">Team</a>
                    <a href="/">Blog</a>
                    <a href="/">Careers</a>
                  </div>
                ) : null}
              </div>
              <div className="main__menu--links">
                <div className="main__menu--ref">
                  <h2 onClick={() => setOpenConnect(() => !openConnect)}>
                    Connect
                  </h2>
                  <img
                    src={arrow}
                    alt="arrow"
                    className={
                      openConnect ? "main__menuImg--open" : "main__menuImg"
                    }
                  />
                </div>
                {openConnect ? (
                  <div className="main__menu--openLinks">
                    <a href="/">Contact</a>
                    <a href="/">Newsletter</a>
                    <a href="/">LinkedIn</a>
                  </div>
                ) : null}
              </div>
              <div className="divider"></div>
              <div className="main__menu--logBtn">
                <button className="login__btn">Login</button>
                <button className="signup__btn">Sign Up</button>
              </div>
            </div>
          </>
        ) : (
          <img
            src={hamburguer}
            alt="menu"
            className="main__nav--menuBtn"
            onClick={() => setOpen(!open)}
          />
        )}
      </nav>

      <article className="main__article">
        <h1 className="main__article--title">A modern publishing platform</h1>
        <p className="main__article--info">
          Grow your audience and build your online brand
        </p>
        <div className="main__article--buttons">
          <button className="btn__start">Start for Free</button>
          <button className="btn__learn">Learn More</button>
        </div>
      </article>
    </main>
  );
}

export default Main;
