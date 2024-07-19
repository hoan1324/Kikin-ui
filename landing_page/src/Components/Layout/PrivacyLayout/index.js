import React from 'react';
import classNames from "classnames/bind";
import styles from "./PrivacyLayoutStyle.module.scss";

const cx = classNames.bind(styles);
// các phần nội dung nhỏ bên trong từng mục
function ContentInner({ secin }) {
    return (
        <div className={cx("content-inner")}>
            {secin.title && <h3 className="display-7 my-3">{secin.title}</h3>}
            {secin.paramAbove.length > 0 && secin.paramAbove.map((pAbove, paIndex) => (
                <p className="fs-6 my-3" key={paIndex}>{pAbove}</p>
            ))}
            <ul>
                {secin.list.length > 0 && secin.list.map((lis, liIndex) => (
                    <li className="fs-6 my-3 ms-3" key={liIndex}>{lis}</li>
                ))}
            </ul>
            {secin.paramBelow.length > 0 && secin.paramBelow.map((pBelow, pBIndex) => (
                <p className="fs-6 my-3" key={pBIndex}>{pBelow}</p>
            ))}
        </div>
    );
}
// các phần lớn hơn của mỗi mục, bao gồm tiêu đề và các phần nội dung bên trong.
function ContentParam({ sec, index }) {
    return (
        <div key={index} className={cx("content-param")}>
            <h3 className="display-7 my-3">{`${index + 1}. ${sec.title}`}</h3>
            {sec.inner.map((secin, innerIndex) => (
                <ContentInner key={innerIndex} secin={secin} />
            ))}
        </div>
    );
}

function PrivacyTerm({ content }) {
    return (
        <div className={cx("content", "pt-3")}>
            <div className={cx("content-privacy", "container w-sm-75")}>
                <div className={cx("content-title", "text-center")}>
                    <h1 className="display-2 fw-bolder my-3">{content.title}</h1>
                    <p className="fs-6 my-3">{content.date}</p>
                </div>
                {content.paramtitle.length > 0 &&
                    content.paramtitle.map((param, index) => (
                        <p className="fs-6 my-3" key={index}>{param}</p>
                    ))
                }
                {content.section.map((sec, index) => (
                    <ContentParam key={index} sec={sec} index={index} />
                ))}
            </div>
        </div>
    );
}

export { PrivacyTerm };
