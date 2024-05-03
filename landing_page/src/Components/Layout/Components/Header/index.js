import classNames from "classnames/bind";
import styles from "./HeaderStyle.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Header() {

    return (
        <div className={cx("header")}>
            <nav>
                <div className={cx("logo")}>
                    <Link to="/" > <img src="/assest/pictures/Logo.png" width={99 + "px"} alt="Logo" /></Link>
                </div>
                <div className={cx("title")} >
                    <ul>
                        <li><Link to="/WorkHow">How It Work</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                    </ul>
                </div>
                <div className={cx("login")}>
                    <button><Link to="/Login">LOG IN</Link></button>
                    <button><Link to="/Login">GET FUNDING</Link></button>
                </div>
            </nav>
        </div>
    );
}

export { Header };