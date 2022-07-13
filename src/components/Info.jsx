import React from "react";
import imgMobile from "../images/illustration-editor-mobile.svg";

function Info() {
  return (
    <article className="info">
      <h2 className="info__title">Designed for the future</h2>
      <div className="info__container">
        <div className="info__imgContainer">
          <img src={imgMobile} alt="editor" />
        </div>
        <div className="info__text--container">
          <div className="info__introduction">
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiples blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="info__management">
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Info;
