import styles from "./Section2Style.module.scss"
import { imageSec2 } from "../../../../ImageLink/imageLinkWorkHow";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const cx = classNames.bind(styles)
function SectionTwo() {
  const [visible, setVisible] = useState(Array(imageSec2.length).fill(false))
  const [changeColor, setChangeColor] = useState(Array(imageSec2.length).fill(false))
  let sectionRef = useRef(null);
  const valueElement = (index) => {
    let titleChilds = sectionRef.current.children;
    const titleArray = Array.from(titleChilds);
    return titleArray[index].getBoundingClientRect()
    
  }
  useEffect(() => {
    for (let i = 0; i < imageSec2.length; i++) {
      const elmGet = valueElement(i);
      let changeC = document.querySelectorAll(".changeBorderColor");
           
      if (changeColor[i] && changeColor[i] === true) {
        changeC[i].style.maxHeight = `${(-1) * (elmGet.top - 550)}px`;
      }
      
    }
  }, [changeColor])
  useEffect(() => {
    const scrollChangeColor = () => {
      for (let i = 0; i < imageSec2.length; i++) {
        const isChangeColor = valueElement(i).top - 500 < 0;
        console.log(valueElement(i).top);
        setChangeColor(pre => {
          let newChangeColor = [...pre];
          newChangeColor[i] = isChangeColor;
          return newChangeColor;
        });

      }
    }
    scrollChangeColor();

    window.addEventListener("scroll", scrollChangeColor);
    return () => {
      window.removeEventListener("scroll", scrollChangeColor)
    }
  }, []);
  const handleParameter = (index) => {
    setVisible(pre => {
      const newState = [...pre];
      newState[index] = !pre[index];
      return newState
    }
    )
  }
  return (
    <div className={cx("section-2")}>
      <div ref={sectionRef} className={cx("sec2Contain")}>
        {imageSec2.map((title, index) => (
          <div key={title.id} className={cx("sec2Item-parent", "d-flex", "justify-content-between", "container-fluid")}>
            <div className={cx("btn-animation")}>
              <button className={cx("position-relative", "btn-green", "rounded-circle", "btn-title", (changeColor[index] === false) ? "animation-notchange-bgcolor" : "animation-change-bgcolor")}

              >{"0" + (title.id + 1)}</button>
              <div className={cx("border-btn-animation", "position-relative")}>
                <div className={cx("position-absolute h-100", "content-border", (changeColor[index] === true) ? "changeBorderColor" : "animationHidden")}></div>
              </div>
            </div>
            <div className={cx("sec2Item", "d-flex", "justify-content-between", "container")}>
              <div className={cx("title-sec2")}>
                <h2 className={cx("display-4 ")}>{title.h2}</h2>
                <p>{title.p}</p>
                {
                  title.p_detail &&
                  <div className={cx("question", "position-relative", "overflow-hidden")}>
                    <div
                      onClick={() => handleParameter(index)}
                      className={cx("title-question", "position-relative")}>
                      <h6>{title.p_title}</h6>
                      <FontAwesomeIcon className={cx("position-absolute", "end-0", "top-0")} icon={faMinus} />
                      <FontAwesomeIcon
                        className={cx(
                          "reverse-minus", "top-0",
                          // Kích hoạt hiệu ứng vòng quay nếu câu trả lời được mở
                          (visible[index] === true) ? "animationRotate" : "animationRotateReverse"
                        )}
                        icon={faMinus}
                      />
                      <p
                        className={cx(
                          // Kích hoạt hiệu ứng hiển thị nếu câu trả lời được mở
                          (visible[index] === true) ? "animationVisible" : "animationHidden"
                        )}
                      >
                        {title.p_detail}
                      </p>
                    </div>
                  </div>
                }
                {
                  title.btn && <button className={cx("btn-caculate", "rounded", "btn-not-color")}><HashLink to="/#Pricing">{title.btn}</HashLink></button>
                }
              </div>
              <div className={cx("chart", "ms-auto")}>

                <div className={cx(title.imgAnimate.class, "chart-animtion", "rounded")}
                  style={{
                    backgroundImage: `url(${title.imgAnimate.img})`
                  }}
                >
                  <img src={title.imgAnimate.chart} />
                </div>


              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  )
}
export { SectionTwo }