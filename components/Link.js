import React from "react";

const Link = (props) => (
  <p>
    <a href={props.href} className="link" rel="noopener" target="_blank">
      {props.children}
    </a>
  </p>
);

export default Link;
