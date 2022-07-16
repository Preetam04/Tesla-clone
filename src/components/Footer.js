import React from "react";

function Footer({ type }) {
  const style = {
    footerOptions:
      "text-center font-Gottham-book text-xs text-[#37393e] text-opacity-80 mt-2.5",
  };

  return (
    <>
      {type === "accessorie" ? (
        <footer className=" pb-16 flex items-center flex-col  z-40 h-[10vh] snap-start">
          <ul className="flex flex-col items-center sm:flex-row sm:justify-around sm:w-[42rem] flex-wrap">
            <li className={style.footerOptions}>Tesla © 2022</li>
            <li className={style.footerOptions}>Privacy & Legal</li>
            <li className={style.footerOptions}>Vechicle Recalls</li>
            <li className={`${style.footerOptions} hidden sm:block`}>
              Contact
            </li>
            <li className={style.footerOptions}>Careers</li>
            <li className={style.footerOptions}>News</li>
            <li className={`${style.footerOptions} hidden sm:block`}>Engage</li>
            <li className={`${style.footerOptions} hidden sm:block`}>
              Location
            </li>
          </ul>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
