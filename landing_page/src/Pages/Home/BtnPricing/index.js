import styles from "./btnPricing.module.scss"
import classNames from "classnames/bind";
import { HashLink } from "react-router-hash-link";
import { faChartSimple,faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";

const cx=classNames.bind(styles)
function BtnPricing() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return ( 
        <div className={cx("d-none","d-sm-block","btn-fixed-pricing","position-fixed","py-2","px-4" ,"rounded")}>
        <HashLink className={cx("d-flex","align-items-center")} to="/#Pricing">
        <FontAwesomeIcon className={cx("fs-4")} icon={faChartSimple} />
         <h6 className={cx("text-center","text-dark","mb-0","ms-2","d-inline-block")}>CACULATE <br/> YOUR FUNDING
         </h6>
         <FontAwesomeIcon className={cx("text-dark","ms-3")} icon={faChevronDown} />
        </HashLink>
    </div>
     );
}

export default BtnPricing;