import styles from ".BlogLayouStyle.module.scss"
import classNames from "classnames";
import { Header,Footer } from "../Components";

function BlogLayout({children}) {
    const cx=classNames.bind(styles)
    return ( 
        <div className={cx("body-page")} >
         
            <Header bgColor={"#f3ede4"}/>
        
         <div className={cx("content")}>{children}</div>
        
            <Footer/>
      
        </div>
     );
}

export default BlogLayout;