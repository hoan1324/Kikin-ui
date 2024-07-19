import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import React from "react";

import styles from "./Section6Style.module.scss"
import { titleSponsor, h1pSec6 } from "./title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)
function SectionSix() {
    let sectionRef = useRef(null);
    const [visible, setVisible] = useState({
        h1:false,
        p:false
    });
    const [top, setTop] = useState(Infinity);
    useEffect(() => {

        const scrollVisible = () => {
            if (sectionRef.current) {
             setTimeout(()=>{
                setVisible(pre => {
                    if ((top-200)  < 0 && pre.h1 === false) 
                    {
                       return {
                        ...pre,
                        h1:true
                       }
                    }
                    else if((top+100)  < 0 && pre.p === false){
                        return {
                            ...pre,
                            p:true
                           }
                    }
                    return pre
                })
                setTop(sectionRef.current.getBoundingClientRect().top)
             },100)

            }

        }
        scrollVisible();

        window.addEventListener("scroll", scrollVisible);
        return () => {
            window.removeEventListener("scroll", scrollVisible)
        }
    }, [top])
    return (
        <div ref={sectionRef} className={cx("section", "section-6")}>
            <div className={cx("image-position", "img-section6")}>
                <h1 className={cx( "title-position","title-section6", (visible.h1 === false) ? "opacity-0" :"animationSlide")}>
                    {h1pSec6.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < h1pSec6.param.split('\n').length && <br />}
                        </React.Fragment>
                    ))}
                </h1>

                <div className={cx("parameter", "parameter-section6")}>
                    <p>{h1pSec6.param.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < h1pSec6.param.split('\n').length && <br />}
                        </React.Fragment>
                    ))}</p>
                </div>
                <img src="/assest/pictures/SponsorBg.png" alt="bg-sponsor" />

            </div>
            <div className={cx("sponsor")} >
                <div className={cx("row" , "border-bottom" ,"border-dark","sponsor-row")} >
                    {
                        titleSponsor.map((title,index) => (
                            <div key={index} className={cx("col-sm-12", "col-md", "border-top","border-end", "border-dark", "table-title")}>
                                <FontAwesomeIcon className={cx("h5", "fw-bolder", "rounded-circle", "icon-sponsor")} icon={title.icon} />
                                <br />
                                <p className={cx("h3", "fw-bolder", "p-sponsor", (visible.p === false) ? "opacity-0" : "animationSlide")}>{title.content.split('\n').map((line, index) => (

                                    <React.Fragment key={index}>
                                        {line}
                                        {index < title.content.split('\n').length && <br />}
                                    </React.Fragment>
                                ))}</p>
                            </div>
                        ))
                    }
                </div>
                <img className={cx("animation-slide")} src="/assest/pictures/sponsorImage.png" alt="sponsor" />
            </div>
        </div>
    )
}
export { SectionSix }