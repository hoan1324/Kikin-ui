import * as Section from "./Section";
import BtnPricing from "./BtnPricing";

import styles from "./HomeStyle.module.scss"
import classNames from "classnames/bind";


const cx=classNames.bind(styles)

function Home() {

    return (
        <div className={cx("Home-body")}>
            {<Section.SectionOne />}
            {<Section.SectionTwo />}
            {<Section.SectionThree />}
            {<Section.SectionFour/>}
            {<Section.SectionFive />}
            {<Section.SectionSix />}
            {<Section.SectionSeven />}
            <BtnPricing />
        </div>
    );
}

export { Home };