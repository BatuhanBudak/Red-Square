import React from "react";

type AppProps = {
  toggleBlur: () => void;
};
export default function Header({ toggleBlur }: AppProps) {
  return (
    <header className="header">
      <a className="logo-link">Red Square</a>
      <div className="right-links">
        <a
          className="nav-link"
          id="work-link"
          href="https://www.redsquareagency.com/work"
          onMouseEnter={toggleBlur}
          onMouseLeave={toggleBlur}
          onFocus={toggleBlur}
          onBlur={toggleBlur}
        >
          Work
        </a>
      </div>
    </header>
  );
}
