import styles from "./Section4Style.module.scss";
import { imageSection4 } from "../../../../ImageLink/imageLinkHome";
import { imgLogo } from "../../../../assest/image";
import { formatMoney } from "../../../../Convert";
import { totalMoney, convertDiscounts, valueDiscount, valueFee, convertFee, repayment } from "./moneyResult";

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

const cx = classNames.bind(styles);

function SectionFour() {
    const [checkboxer, setCheckboxer] = useState(Array(4).fill(false));
    const [inputValue, setInputValue] = useState([1000, 1, 0]);
    const [total, setTotal] = useState(totalMoney(1000, 1, 0));
    const [visible, setVisible] = useState(Array(imageSection4.img_family.length).fill(false));
    const imgRef = useRef(null);

    useEffect(() => {
        const scrollVisible = () => {
            const imgChilds = imgRef.current.children;
            const imgArray = Array.from(imgChilds);

            imgArray.forEach((element, index) => {
                const elmGet = element.getBoundingClientRect();
                const isVisible = elmGet.bottom < 400;

                setVisible(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = isVisible;
                    return newVisible;
                });
            });
        };

        scrollVisible();
        window.addEventListener("scroll", scrollVisible);
        return () => {
            window.removeEventListener("scroll", scrollVisible);
        };
    }, []);

    useEffect(() => {
        setTotal(totalMoney(inputValue[0], inputValue[1], inputValue[2], checkboxer));
    }, [inputValue, checkboxer]);

    const handleInput = (e, index) => {
        setCheckboxer(prev => {
            const newInput = [...prev];
            newInput[index] = e.target.checked;
            return newInput;
        });
    };

    const handleSlide = (e, index) => {
        setInputValue(prev => {
            const newInput = [...prev];
            newInput[index] = Number(e.target.value);
            return newInput;
        });
    };

    return (
        <div id="Pricing" className={cx("section-4", "section")}>
            <div className={cx("content-sec4", "d-flex", "justify-content-between")}>
                <div className={cx("titleSec4")}>
                    <h1>{imageSection4.title}</h1>
                    <div ref={imgRef} className={cx("img-family-circle", "family-img-section4", "position-relative", "h-25")}>
                        {imageSection4.img_family.map(image => (
                            <img
                                className={cx(visible[image.id] ? "animationVisible" : "animationHidden")}
                                key={image.id}
                                src={image.img}
                                alt="logo"
                                style={{
                                    top: `${image.top}%`,
                                    bottom: `${image.bottom}%`,
                                    right: `${image.right}%`,
                                    left: `${image.left}%`
                                }}
                            />
                        ))}
                    </div>
                    <p className={cx("parameter")}>{imageSection4.param}</p>
                    <button className={cx("fw-bolder", "btn-green", "btnGreenHover")}>GET FUNDING</button>
                </div>
                <div className={cx("solution", "rounded", "p-5")}>
                    <div className={cx("choice-condition")}>
                        <div className={cx("range-condition")}>
                            {imageSection4.choiceRange.map((choice, index) => (
                                <div key={index} className={cx("my-3", "range", "d-flex", "justify-content-start", "align-items-center")}>
                                    <label>
                                        <FontAwesomeIcon icon={choice.icon} />
                                        {choice.label}
                                    </label>
                                    <div className={cx("d-flex", "justify-content-between", "slideRange")}>
                                        <input
                                            onChange={(e) => handleSlide(e, index)}
                                            type="range"
                                            max={choice.max}
                                            min={choice.min}
                                            step={choice.step}
                                            value={inputValue[index]}
                                        />
                                        <span>{choice.transform ? choice.transform(inputValue[index]) : inputValue[index]}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx("click-condition")}>
                            <h3>{imageSection4.choiceImage.title}</h3>
                            <div className={cx("img-choice-family", "d-flex", "justify-content-between", "my-5")}>
                                {imageSection4.choiceImage.choice.map((choicImg, index) => (
                                    <div key={index} className={cx("image-logo-choice", "position-relative")}>
                                        <input
                                            onClick={(e) => { handleInput(e, index); }}
                                            className={cx("position-absolute", "opacity-0")}
                                            type="checkbox"
                                            id={`checkbox${index + 1}`}
                                        />
                                        <img className={cx("check-box-img", "position-absolute")} src={imgLogo.checkbox} alt="logo" />
                                        <label
                                            className={cx("rounded-3", "btn", "btn-outline-secondary", "d-flex", "align-items-center", "justify-content-center")}
                                            htmlFor={`checkbox${index + 1}`}
                                        >
                                            <img className={cx("mw-100")} src={choicImg} alt="img" />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx("result", "mt-5")}>
                        <div className={cx("total-money", "d-flex", "justify-content-between", "mb-5", "align-items-center")}>
                            <h4 className={cx("rounded")}>{imageSection4.result.title}</h4>
                            <span>{`${formatMoney(repayment(inputValue[0], inputValue[1], inputValue[2], checkboxer))} $`}</span>
                        </div>
                        <div className={cx("detail-money", "d-flex", "justify-content-between")}>
                            <div className={cx("title-detail")}>
                                <p>{imageSection4.result.fee}</p>
                                <p>{imageSection4.result.discount}</p>
                                <p>{imageSection4.result.total}</p>
                            </div>
                            <div className={cx("evaluate-detail")}>
                                <p>{`${formatMoney(valueFee(inputValue[0], inputValue[1], inputValue[2]))} (${(convertFee(inputValue[1], inputValue[2]) * 100).toFixed(3)} %)`}</p>
                                <p>{`- ${formatMoney(valueDiscount(inputValue[0], inputValue[1], inputValue[2], checkboxer))} (${(convertDiscounts(checkboxer) * 100).toFixed(1)}%)`}</p>
                                <p>{`${formatMoney(total)}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SectionFour };
