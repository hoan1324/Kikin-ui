import styles from "./Section3Style.module.scss"
import { imageSec3 } from "../../../../ImageLink/imageLinkHome";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)
function SectionThree() {

  return (
    <div className={cx("section-3", "section-bg")}>
      <div className={cx("sec3Contain","container")}>
        {imageSec3.map((title) => (
          <div key={title.id} className={cx("sec3Item","d-flex","justify-content-between","border-bottom border-dark")}>

            <div className={cx("title-sec3")}>
              <button className={cx("btn-green","rounded-circle","btn-title")}>{"0" + (title.id + 1)}</button>
              <h2 className={cx("display-4")}>{title.h2}</h2>
              <p>{title.p}</p>
              <div></div>
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
        ))}

      </div>
    </div>

  )
}
export { SectionThree }