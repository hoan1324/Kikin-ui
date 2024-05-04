import styles from "./QuestionStyle.module.scss"
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faArrowRotateRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import { question_detail } from "./question_detail";

const cx = classNames.bind(styles)

function Question() {
    const [hidden, setHidden] = useState(true);
    const [type,setType]=useState("")
    const handleQuestion=(title)=>{
        setHidden((pre) =>!pre)
        setType(title)
        console.log(child.current.getBoundingClientRect());
        
    }
    let child=useRef()
    let h2R=useRef();
   
    
    return (
        <div className={cx("questions")}>
            <div className={cx("question")}>
                <h1>FAQS</h1>
                <div className={cx("question-content")}>
                    <div className={cx("question-title")}>
                        <div className={cx("enable","questiontt")}>
                            <FontAwesomeIcon icon={faRectangleList} />
                            <span>FUNDING</span>
                        </div>
                        <div className={cx("questiontt")}>
                            <FontAwesomeIcon icon={faArrowRotateRight} />
                            <span>REPAYMENTS</span>
                        </div>
                        <div className={cx("questiontt")}>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                            <span>GENERALS</span>
                        </div>

                    </div>
                    <div className={cx("question-detail")}>
                        {question_detail.map((questions) => (
                            <div key={questions.Topic} className={cx("question-dt" ,+questions.Topic)}>
                                {questions.detail.map((question) => (
                                    <div ref={child} key={question.title} className={cx("question-child")}>
                                        <div className={cx("title")} >
                                            <h2 ref={h2R}>{question.title}</h2>
                                            <FontAwesomeIcon icon={faMinus}
                                                onClick={()=>handleQuestion(question.title)}
                                            />
                                        </div>
                                        <p>{question.answer}</p>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export { Question};