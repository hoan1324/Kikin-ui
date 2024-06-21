import classNames from "classnames/bind";
import { useState,useRef,useEffect } from "react";
import React from "react";

import styles from "../../HomeStyle.module.scss";
import { titleSponsor,h1pSec7 } from "./title"; 

const cx = classNames.bind(styles)
function SectionSeven(){
    return (
        <div className={cx("section","section-7")}>
            <div className={cx("image-position","img-section7")}>
              <h1 className={cx("title-section7","title-position")}>
              {h1pSec7.title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < h1pSec7.param.split('\n').length && <br />}
        </React.Fragment>
    ))}
              </h1>

            <div className={cx("parameter","parameter-section7")}>
                <p>{h1pSec7.param.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < h1pSec7.param.split('\n').length && <br />}
        </React.Fragment>
    ))}</p>
            </div>
            <img src="/assest/pictures/SponsorBg.png" alt="bg-sponsor" /> 

            </div>
            <div className={cx("sponsor")} >
                <div className={cx("table-title")}></div>
                <img alt="sponsor" />
            </div>
        </div>
    )
}
export {SectionSeven}