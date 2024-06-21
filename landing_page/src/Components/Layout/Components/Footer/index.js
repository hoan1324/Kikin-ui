import classNames from "classnames/bind";
import styles from "./FooterStyle.module.scss"
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)

function TitleP() {
    return (
        <div className={cx("title-position")}>
        <h1>GET FUNDING.<br></br><span>CHANGE THE <br></br>WORLD.</span></h1>
        <button className={cx("signIn", "btn-not-color")}><Link to="/Login">SIGN UP TO KIKIN</Link></button>
    </div>
    )
}

function Contact() {
    return (
        <div className={cx("contact")}>
        <img src="/assest/pictures/logo_contact.png" alt="logo" width={60 + "px"} />
        <h2>Get in touch
            <br></br><a href="#">hello@kikin.io</a>
        </h2>
    </div>
    )
}

function Address() {
    return (
        <div className={cx("address")}>
        <ul>
            <li>2023 Kikin Financial Ltd</li>
            <li>Сompany no. 14569152</li>
            <li>Ground Floor, Verse Building, 18 <br></br>Brunswick Place, London, N1 6DZ</li>
        </ul>
    </div>
    )
}

function Privacy() {
   return (
    <div className={cx("privacy")}>
    <ul>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="">Privacy policy</Link></li>
        <li><Link to="">Term of service</Link></li>
    </ul>
    <div className={cx("social")}>
        <button className={cx("btn-not-color")}><a href="#">Linkedin</a></button>
        <button className={cx("btn-not-color")}><a href="#">X</a></button>
    </div>
</div>
   )
}

function Footer() {
    return (
        <footer>
            <div className={cx("Footer")}>
                <div className={cx("image-position","title")}>
                    <TitleP />
                    <img src="/assest/pictures/BackgroundFooterHome.png" alt="logo" />
                </div>
                <div className={cx("detail")}>
                    <Contact />
                    <Address />
                    <Privacy />
                </div>
            </div>
        </footer>
    );
}

export { Footer };