import styles from "./SectionOneCommonStyle.module.scss"

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import React from "react";
const cx=classNames.bind(styles)
function SectionOneCommon({ children, titleSection,classCustom }) {
    let sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {

        const scrollVisible = () => {
            if (sectionRef.current) {
                if (window.scrollY >= 0 && window.scrollY < sectionRef.current.getBoundingClientRect().height - 200 && visible === false) {
                    setTimeout(() => {
                        setVisible(true)
                    }, 300)
                }
            }

        }
        scrollVisible();

        window.addEventListener("scroll", scrollVisible);
        return () => {
            window.removeEventListener("scroll", scrollVisible)
        }
    }, [visible])
    return (
        <div ref={sectionRef} className={cx("section-common-1", "image-position", "section",classCustom)}>
            <div className={cx("title-section","title-position", (visible === false) ? "opacity-0" : "animationSlide"
            )}

            >
                <h1>
                    {titleSection.h1.split("n-g").map((line, index) => (
                        <React.Fragment key={index}>
                            {index === 0 && line}
                            {index > 0 && <span>{line}</span>}
                            {index < titleSection.h1.split("n-g").length && <br />}
                        </React.Fragment>
                    ))}
                </h1>
                <div className={cx("parameter", "p-sec1")}>
                    <p>{titleSection.p.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < titleSection.p.split("\n").length && <br />}
                        </React.Fragment>
                    ))}</p>

                </div>
                <button className={cx("btn-green", "btnGreenHover")}><Link to="/Login">GET FUNDING</Link></button>
            </div>
            {children}

        </div>
    )
}

export default SectionOneCommon;