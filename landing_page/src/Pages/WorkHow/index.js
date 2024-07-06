import styles from "./WorkHowStyle.module.scss"
import classNames from "classnames/bind";
import * as Section from "./Section"
const cx = classNames.bind(styles);
function WorkHow() {
    return ( 
    <div className={cx("WorkHow-body")}>
{<Section.SectionOne/>}
{<Section.SectionTwo/>}

    </div>
    )
}

export  {WorkHow};