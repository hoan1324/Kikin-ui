import styles from "./Section2Style.module.scss"
import { imageSec2 } from "../../../../ImageLink/imageLinkWorkHow"; 
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function SectionTwo() {

  return (
    <div className={cx("section-2")}>
      <div className={cx("sec2Contain","container")}>
        {imageSec2.map((title) => (
          <div key={title.id} className={cx("sec2Item","d-flex","justify-content-between")}>
                         <button className={cx("btn-green","rounded-circle","btn-title")}>{"0" + (title.id + 1)}</button>

           <div className={cx("d-flex","justify-content-between")}>
           <div className={cx("title-sec2")}>
              <h2 className={cx("display-4 ")}>{title.h2}</h2>
              <p>{title.p}</p>
              {
                title.p_detail && <div>{title.p_detail}</div>
              }
              {
                title.btn && <button>{title.btn}</button>
              }
            </div>
            <div className={cx("chart","ms-auto")}>

                <div className={cx(title.imgAnimate.class,"chart-animtion")}
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