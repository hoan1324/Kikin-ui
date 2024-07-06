import styles from "../DefaultLayout/DefaultLayouStyle.module.scss"
import classNames from "classnames";
import { Header,Footer } from "../Components";

function LayoutNotQues({children}) {
    const cx=classNames.bind(styles)
    return ( 
        <div className={cx("body-page")} >
         
            <Header/>
        
         <div className={cx("content")}>{children}</div>
        
            <Footer/>
      
        </div>
     );
}

export default LayoutNotQues;