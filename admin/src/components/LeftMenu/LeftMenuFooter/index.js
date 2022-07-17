/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://github.com/gustavo2892"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freitas Software
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
