import styles from "./PrivacyLayoutStyle.module.scss"
import classNames from "classnames/bind";

const cx=classNames.bind(styles)
function PrivacyTerm({ content }) {
    return (
        <div  className={cx("content","pt-3")}>
            <div className={cx("content-privacy", "container w-75")}>
           <div className={cx("content-title"," text-center")} >
           <h1 className="display-2 fw-bolder my-3">{content.title}</h1>
            <p className="fs-6 my-3">{content.date}</p>
           </div>
           {content.paramtitle.length > 0 &&
                content.paramtitle.map((param, index) => (
                    <p className="fs-6 my-3" key={index}>{param}</p>
                ))
            }
            {content.section.map((sec, index) => (
                <div key={index} className={cx("content-param")}>
                    <h3 className="display-7 my-3">{(index + 1)+" " + sec.title}</h3>
                    {sec.inner.map((secin, innerIndex) => (
                        <div key={innerIndex} className={cx("content-inner")}>
                            {secin.title !== null && <h3 className="display-7 my-3">{`${index+1}.${innerIndex+1} ${secin.title}`}</h3>}
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
                    ))}
                </div>

            ))}
        </div>
        </div>
    );
}

export { PrivacyTerm };