import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h2>Blogr</h2>
      <div className="footer__info">
        <h4>Product</h4>
        <a href="/">Overview</a>
        <a href="/">Pricing</a>
        <a href="/">Marketplace</a>
        <a href="/">Features</a>
        <a href="/">Integrations</a>
      </div>
      <div className="footer__info">
        <h4>Company</h4>
        <a href="/">About</a>
        <a href="/">Team</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
      </div>
      <div className="footer__info">
        <h4>Connect</h4>
        <a href="/">Contact</a>
        <a href="/">Newsletter</a>
        <a href="/">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
