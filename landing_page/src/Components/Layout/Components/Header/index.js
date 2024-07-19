// Import các thư viện và file styles
import classNames from "classnames/bind";
import styles from "./HeaderStyle.module.scss";
import { navTitle } from "./navTitle";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

// Sử dụng classNames với styles
const cx = classNames.bind(styles);

function Header({ bgColor, logoBlack, textColor }) {
    // State cho việc ẩn hiện phần menu trên mobile
    const [hidden, setHidden] = useState(true);
    // State cho loại phần tử hiển thị trong menu
    const [Element, setElement] = useState((window.innerWidth < 988) ? "li" : "button");
    // State cho việc header được cố định khi scroll
    const [fixed, setFixed] = useState(false);

    // Thiết lập chuyển đổi phần tử dựa trên kích thước màn hình
    useEffect(() => {
        const handleResize = () => {
            (window.innerWidth <= 988) ? setElement("li") : setElement("button");
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // Xử lý việc header cố định khi scroll
    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > headerRef.current.clientHeight) ? setFixed(true) : setFixed(false);
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Ref cho header
    const headerRef = useRef();

    return (
        <div ref={headerRef} className={cx("header", (fixed === true) ? "position-fixed" : "")}
            style={bgColor && { backgroundColor: bgColor }}
        >
            <nav>
                <div className={cx("logo")}>
                    <Link to="/" > <img src={"/assest/pictures/" + ((logoBlack) ? logoBlack : "Logo") + ".png"}
                        width={99 + "px"} alt="Logo" /></Link>
                </div>
                <div className={cx("tt-login", (window.innerWidth > 988) ? "" : (hidden === true) ? "animationHidden" : "animationVisible")}
                    style={bgColor && { backgroundColor: bgColor }}
                >
                    <div className={cx("title")} >
                        <ul>
                            {navTitle.map((navT, index) => {
                                const LinkComponent = navT.link.includes("#") ? HashLink : Link;
                                return (
                                    <li key={index}>
                                        <LinkComponent to={navT.link} style={textColor ? { color: textColor } : {}}>
                                            {navT.title}
                                        </LinkComponent>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx("login")}>
                        <Element className={cx((Element === "button") ? "btn-green" : "")}><Link to="/Login" style={textColor && { color: textColor }}>LOG IN</Link></Element>
                        {(Element === "button") ?
                            <Element className={cx("btn-green", "btnGreenHover")}><Link to="/Login">GET FUNDING</Link></Element>
                            : <Element><Link to="/Login" style={textColor && { color: textColor }}>GET STARTED</Link></Element>
                        }
                    </div>
                </div>
                <div onClick={() => { setHidden(prev => !prev) }} className={cx("iconbars")}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </div>
    );
}

export { Header };
