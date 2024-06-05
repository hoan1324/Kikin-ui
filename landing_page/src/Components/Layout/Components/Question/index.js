import styles from "./QuestionStyle.module.scss"

import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import {  useState } from "react";

import { question_detail, TitleQuestion } from "./question_detail";

const cx = classNames.bind(styles)

function Question() {
    
    const [enable, setEnable] = useState({
        type: true,
        title: "FUNDING"
    });
    const [visible, setVisible] = useState({
        type: true,
        title: ""
    });
  
    const handleTitle = (titleQuetion) => {

        setEnable((pre) => {

            return {
                type: pre.type,
                title: titleQuetion
            };

        })
    }
    const handleParameter=(titleQuetion)=>{
       
        setVisible((pre) => {
            console.log(pre);
         if(pre.title===titleQuetion){
          
            return {
                ...pre,
                type:!pre.type
            }
            
         }
           else{
          
            return{
                ...pre,
                type:true,
                title:titleQuetion
            }
           }

        })
    }


    return (
        <div className={cx("questions")}>
            <div className={cx("question")}>
                <h1>FAQS</h1>
                <div className={cx("question-content")}>
                    <div className={cx("question-title")}>
                        {TitleQuestion.map((titleQuetion) => (
                            <div key={titleQuetion.title}
                                className={cx((enable.type === true && enable.title === titleQuetion.title) ? "enable" : "", "questiontt")}
                                onClick={() => handleTitle(titleQuetion.title)}>
                                <FontAwesomeIcon icon={titleQuetion.icon} />
                                <span>{titleQuetion.title}</span>
                            </div>
                        ))}


                    </div>
                    <div className={cx("question-detail")}>
                        {question_detail.map((questions) => (
                            <div key={questions.Topic}
                                className={cx("question-dt", (enable.type === true && enable.title === questions.Topic.toUpperCase()) ? "enable" : "")}>
                                {questions.detail.map((question) => (
                                    <div  key={question.title} className={cx("question-child")}>
                                        <div className={cx("title")}
                                        onClick={()=>handleParameter(question.title)}>
                                            <h2 >{question.title}</h2>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <FontAwesomeIcon 
                                            className={cx("reverse-minus",
                                            ( visible.title===question.title)?"animationRotate":"",
                                            (visible.title===question.title && visible.type===false)?"animationRotateReverse":""
                                           )} 
                                            icon={faMinus}/>
                                        </div>
                                    <p className={cx(
                                            ( visible.title===question.title)?"animationVisible":"",
                                            (visible.title===question.title && visible.type===false)?"animationHidden":""
                                           )}   >
                                        {question.answer}</p>
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

export { Question };