import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import nugs from "../public/icon/nugs-logo.svg";
import twitter from "../public/icon/twitter.svg";
import instagram from "../public/icon/instagram.svg";
import linkedin from "../public/icon/linkedin.svg";
import work from "../public/photos/work.avif";
import useScreenSize from "../hooks/useScreenSize";
import { motion, Variants } from "framer-motion";
import DialogModal from "./DialogModal";

export default function Footer({ toggleBlur }: { toggleBlur: () => void }) {
  const [isOpened, setIsOpened] = useState(false);
  const windowWidth = useScreenSize();
  const desktopSize = 650;
  const containerRef = useRef<HTMLAnchorElement>(null);
  const targetRef = useRef<HTMLHeadingElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const constrain = 10;

  const variants: Variants = {
    slideDown: {
      opacity: 0,
      y: "50%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    slideUp: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (!containerRef.current || !targetRef.current)
      throw Error("ref is not assigned");

    const containerEle = containerRef.current;
    const targetEle = targetRef.current;

    function rotateLink(e: MouseEvent) {
      const x: number = e.clientX;
      const y: number = e.clientY;

      transforms(x, y, targetEle);
    }
    function transforms(x: number, y: number, el: HTMLHeadingElement) {
      const box = el.getBoundingClientRect();
      const calcY = -(y - box.y - box.height / 2) / constrain;
      const calcX = (x - box.x - box.width / 2) / -constrain;
      setX(calcY);
      setY(calcX);
    }

    function resetRotation() {
      setX(0);
      setY(0);
    }
    if (containerEle) {
      containerEle.addEventListener("mousemove", rotateLink);
      containerEle.addEventListener("mouseleave", resetRotation);
    }

    return () => {
      containerEle.removeEventListener("mousemove", rotateLink);
      containerEle.removeEventListener("mouseleave", resetRotation);
    };
  }, []);

  return (
    <footer>
      <motion.section
        variants={variants}
        initial="slideDown"
        whileInView="slideUp"
        className="footer-first-section"
      >
        <section className="footer-first-links">
          <a ref={containerRef} href="mailto:hi@rsq.com" className="lets-talk">
            <h4
              ref={targetRef}
              style={{
                transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(0)`,
              }}
              onMouseEnter={toggleBlur}
              onMouseLeave={toggleBlur}
              onFocus={toggleBlur}
              onBlur={toggleBlur}
            >
              Let&apos;s talk. <span className="red">hi@rsq.com</span>
            </h4>
          </a>
        </section>
        <section className="footer-second-links">
          <ul className="footer-second-links--social-list">
            <li>
              <button
                className="modal-button"
                onClick={() => setIsOpened(true)}
              >
                <span className="plus-icon"></span>
                <Image src={nugs} alt="nugs logo" />
              </button>
            </li>
            <li>
              <a href="https://www.instagram.com/redsquareagency/">
                <Image src={instagram} alt="instragram logo" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/redsquareagency">
                <Image src={twitter} alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/red-square-agency/">
                <Image src={linkedin} alt="linkedin logo" />
              </a>
            </li>
          </ul>
          <ul className="footer-second-links--cities-list">
            <li>
              <h5>Mobile, AL</h5>
            </li>
            <li>
              <h5> Chicago, IL</h5>
            </li>
            <li>
              <h5>Tulsa, OK</h5>
            </li>
          </ul>
        </section>
      </motion.section>
      <section className="footer-second-section">
        <div className="footer-last-section-container">
          <a className="footer-last-section-link" href="">
            <div className="footer-last-section-text-container">
              {windowWidth! >= desktopSize && (
                <h3 className="footer-projects-link">All Projects</h3>
              )}
              <span className="footer-work-link">Work</span>
            </div>
            <div className="footer-image-wrapper">
              <Image src={work} alt="" />
            </div>
          </a>
        </div>
      </section>
      <DialogModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </footer>
  );
}
