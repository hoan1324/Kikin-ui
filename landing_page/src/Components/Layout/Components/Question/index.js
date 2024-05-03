import styles from "./QuestionStyle.module.scss"
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateRight,faMinus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Question() {
    return (
        <div className={cx("footer")}>
            <h1>FAQS</h1>
            <div className={cx("question-content")}>
                <div className={cx("question-title")}>
                    <div className={"questiontt"}>
                        <FontAwesomeIcon icon={faRectangleList} />
                        <span>FUNDING</span>
                    </div>
                    <div className={"questiontt"}>
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                        <span>REPAYMENTS</span>
                    </div>
                    <div className={"questiontt"}>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                        <span>GENERALS</span>
                    </div>

                </div>
                <div className={cx("question-detail")}>
                    <div className={"questiondt"}>
                        <div className={"questiondt-child"}>
                          <h2>How quickly can I access the funds?</h2>
                          {/* <FontAwesomeIcon icon={faMinus} /> */}
                          <FontAwesomeIcon icon={faMinus} />
                          <p>Once you've completed a brief questionnaire about your business and connected your financial accounts, you'll have immediate access to a portion of your funds. The full amount will be available within 72 hours after our team manually checks your company details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Question };