import classNames from "classnames/bind";
import styles from "./HeaderStyle.module.scss"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(styles);
function Header() {
    const[hidden,setHidden]=useState(false);
    const[Element,setElement]=useState((window.innerWidth<988)?"li":"button");
    const[fixed,setFixed]=useState(false);
   useEffect(()=>{
    const handleResize=()=>{
        (window.innerWidth <= 988)?setElement("li"):setElement("button");
        
    }
    window.addEventListener("resize",handleResize)
    return()=>{
        window.removeEventListener("resize",handleResize)
    }
   },[])
   useEffect(()=>{
    const handleScooll=()=>{
        (window.scrollY > headerRef.current.clientHeight )?setFixed(true):setFixed(false);
        console.log(headerRef.current.clientHeight );
    }
    window.addEventListener("scroll",handleScooll)
    return()=>{
        window.removeEventListener("scroll",handleScooll)
    }
   },[])
   console.log(hidden);
   const headerRef=useRef();
    return (
        <div ref={headerRef} className={cx("header",(fixed===true)?"position-fixed":"")}>
            <nav>
                <div className={cx("logo")}>
                    <Link to="/" > <img src="/assest/pictures/Logo.png" width={99 + "px"} alt="Logo" /></Link>
                   
                </div>
                <div className={cx("tt-login",(window.innerWidth>988)?"":(hidden===true)?"animationHidden":"animationVisible")}>
                    <div className={cx("title")} >
                        <ul>
                            <li><Link to="/WorkHow">How It Work</Link></li>
                            <li><Link to="/">Pricing</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className={cx("login")}>
                        <Element><Link to="/Login">LOG IN</Link></Element>
                        <Element><Link to="/Login">GET FUNDING</Link></Element>
                    </div>
                </div>
                <div onClick={()=>{setHidden(pre=>!pre)}} className={cx("iconbars")}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </div>
    );
}

export { Header };