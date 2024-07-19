import React, { useState } from 'react';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { imgLogo } from "../../assest/image";
import { imgLoginMargin } from "../../ImageLink/ImageLinkLogin";
import styles from "./LoginStyle.module.scss";

const cx = classNames.bind(styles);
//hiển thị logo của ứng dụng.
function Logo() {
    return (
        <div className={cx("logo", "py-5")}>
            <img src="/assest/pictures/Logo.png" width="99px" alt="Logo" />
        </div>
    );
}
//Bao gồm nội dung chính của trang đăng nhập, bao gồm tiêu đề, mô tả, các nút và biểu mẫu đăng nhập.
function Content() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

  

    return (
        <div className={cx("content", "mt-5")}>
            <h5 className="display-1 font-weight-bold">GET STARTED</h5>
            <p className="fs-4 my-4">Access equity-free invoice financing to manage cash <br />flow, pay suppliers and scale faster</p>
            <button className={cx("my-3", "btn-google", "rounded")}>
                <a href="#" className="fs-5">
                    <img src={imgLogo.google} width="29px" alt="logo-google" />
                    <span className={cx("d-none d-sm-inline-block")}>CONTINUE WITH GOOGLE</span>
                </a>
            </button>
            <div className={cx("title-or", "position-relative my-3")}>or</div>
            <form>
                <div className="mb-3">
                    <input
                        value={value}
                        onChange={handleChange}
                        type="email"
                        className="mt-3 d-inline-block form-control fs-6"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    disabled={value.trim() === ""}
                    type="submit"
                    className={cx(" mb-3  fs-5", "btnGreenHover", "btn-green")}
                >
                    CONTINUE WITH EMAIL
                </button>
            </form>
            <div className={cx("terms-privacy-contactUs")}>
                <ul className="d-flex justify-content-between ps-0 flex-wrap">
                    <li>&copy; Kikin</li>
                    <li><Link to="/Term">Terms of services</Link></li>
                    <li><Link to="/Privacy">Privacy policy</Link></li>
                    <li><Link to="/">Contact us</Link></li>
                </ul>
            </div>
        </div>
    );
}
//Hiển thị hình ảnh nền cho trang đăng nhập.
function Images() {
    return (
        <div className={cx("img-family-login")}>
            {imgLoginMargin.map((image) => (
                <img
                    key={image.id}
                    className={cx("position-absolute", "image" + image.id, "image-common")}
                    src={image.img}
                    width={image.width + "px"}
                    height={image.height + "px"}
                    style={{
                        transform: `rotate(${image.rotate}deg)`,
                        top: image.top + "%",
                        bottom: image.bottom + "%",
                        right: image.right + "%",
                        left: image.left + "%"
                    }}
                    alt={`image-${image.id}`}
                />
            ))}
        </div>
    );
}

function Login() {
    return (
        <div className={cx("container-fluid position-relative overflow-hidden", "body-login")}>
            <div className={cx("container", "text-center", "body-content")}>
                <Logo />
                <Content />
            </div>
            <Images />
        </div>
    );
}

export { Login };
