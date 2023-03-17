import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">Social Media </div>
      <small>connect with me..</small>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a className="link" href="https://github.com/joshi-omkar" target="_blank">
            github
          </a>
        </li>
        <li className="list-item-inline">
          <a className="link" href="https://twitter.com/ye_joshya" target="_blank">
            twitter
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            href="https://linkedin.com/in/joshiomkar04"
            target="_blank"
          >
            linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
