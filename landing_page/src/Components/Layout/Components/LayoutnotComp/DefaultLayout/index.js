import styles from "./LayoutnotComp.module.scss"
import classNames from "classnames";

function LayoutnotComp({children}) {
    const cx=classNames.bind(styles)
    return ( 
        <div className={cx("body-page")} >
         
            <Header/>
        
         <div className={cx("content")}>{children}</div>
        
            <Question/>
         
        
            <Footer/>
      
        </div>
     );
}

export default LayoutnotComp;