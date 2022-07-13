import React from "react";
import imgLaptop from "../images/illustration-laptot-mobile.svg";

function Extra() {
  return (
    <article className="info">
      <div className="info__container">
        <div className="info__imgContainer">
          <img src={imgLaptop} alt="editor" className="extra__img" />
        </div>
        <div className="info__text--container info__text--extra">
          <div className="info__introduction">
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media intregration,
              third-party commeting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="info__management">
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Extra;
