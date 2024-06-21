import { SectionCarousel } from "../../../../Components/Layout/Components"
import { imageSection3 } from "../../../../ImageLink/imageLink";
import styles from "../../HomeStyle.module.scss"

import classNames from "classnames/bind";

const cx=classNames.bind(styles)
function SectionThree(){
return (
    <div className={cx("section-3","section-bg")}>
        <SectionCarousel props={imageSection3} />
    </div>
)
}
export {SectionThree}