import SectionOneCommon from "../../../../Components/Layout/Components/SectionCommon/SectionOneCommon";
import { titleSection } from "./titleSection";
import styles from "./Section1Style.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles)
function SectionOne() {
    return (
        <div className={cx("section-1","position-relative")}>
            <SectionOneCommon titleSection={titleSection} classCustom={cx("custom-section-one-common")}>
                <div className={cx("img-family")}>
                    {titleSection.img_family.map((image, index) => (
                        <img className={cx(`img-${image.id}`, "position-absolute")} src={image.img} key={index} />
                    ))}
                </div>
            </SectionOneCommon>
        </div>
    )
}
export { SectionOne }