import styles from "./DefaultLayouStyle.module.scss"
import classNames from "classnames";
import { Header,Footer,Question } from "../Components";

function DefaultLayout({children}) {
    const cx=classNames.bind(styles)
    return ( 
        <div className={cx("container")} >
         
            <Header/>
        
         <div className={cx("content")}>{children}</div>
        
            <Question/>
         
        
            <Footer/>
      
        </div>
     );
}

export default DefaultLayout;