import {SectionThree, SectionOne,SectionTwo,SectionSix,SectionSeven } from "./Section";

import styles from "./HomeStyle.module.scss"
import classNames from "classnames/bind";

const cx=classNames.bind(styles)

function Home() {
    return (
        <div className={cx("Home-body")}>
            <SectionOne />
            <SectionTwo />
            <SectionSix />
            <SectionSeven />
        </div>
    );
}

export { Home };