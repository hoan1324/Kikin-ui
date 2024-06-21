import styles from "../../HomeStyle.module.scss"

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";

const cx=classNames.bind(styles)
function SectionOne() {
    let sectionRef=useRef(null);
     const [visible, setVisible] = useState(false);
     useEffect(() => {
        
         const scrollVisible = () => {
           if(sectionRef.current){
             if (window.scrollY >= 0 && window.scrollY < sectionRef.current.getBoundingClientRect().height-200 && visible === false) {
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
         <div ref={sectionRef} className={cx("section-1", "image-position","section")}>
             <div className={cx("title-position", (visible === false) ? "animationHidden" : "animationVisible"
             )}
 
             >
                 <h1>FINANCING<br /><span>THE FUTURE</span></h1>
                 <div className={cx("parameter","p-sec1")}>
                     <p>Pay suppliers faster, manage invoices, and extend cash for longer. Get access</p>
                     <p>to funding without giving up equity, so that you can focus on growing you</p>
                     <p>company.</p>
                 </div>
                 <button className={cx("btn-green", "btnGreenHover")}><Link to="/Login">GET FUNDING</Link></button>
             </div>
             <img src="/assest/pictures/BackgroundHeaderHome.png" alt="headerHome"></img>
         </div>
     )
 }
 export{SectionOne}