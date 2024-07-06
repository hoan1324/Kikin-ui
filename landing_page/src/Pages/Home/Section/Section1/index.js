import SectionOneCommon from "../../../../Components/Layout/Components/SectionCommon/SectionOneCommon";
import { titleSection } from "./titleSection";
import styles from "./Section1Style.module.scss"

import classNames from "classnames/bind";
const cx = classNames.bind(styles)
function SectionOne() {
    return (
        <div className={cx("section-1")}>
            <SectionOneCommon titleSection={titleSection}>
                <img src={titleSection.img} alt="headerBg"></img>
            </SectionOneCommon>
        </div>
    )
}
export { SectionOne }