import styles from "./QuestionStyle.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { question_detail, TitleQuestion } from "./question_detail";

const cx = classNames.bind(styles);

// Component hiển thị tiêu đề câu hỏi
function Title({ enable, handleTitle }) {
  return (
    <div className={cx("question-title")}>
      {TitleQuestion.map((titleQuestion) => (
        <div
          key={titleQuestion.title}
          className={cx(
            // Kích hoạt lớp 'enable' nếu tiêu đề này được chọn
            (enable.type && enable.title === titleQuestion.title) && "enable",
            "questiontt"
          )}
          onClick={() => handleTitle(titleQuestion.title)}
        >
          <FontAwesomeIcon icon={titleQuestion.icon} />
          <span>{titleQuestion.title}</span>
        </div>
      ))}
    </div>
  );
}

// Component hiển thị nội dung chi tiết câu hỏi
function Detail({ enable, handleParameter, visible }) {
  return (
    <div className={cx("question-detail")}>
      {question_detail.map((topic) => (
        <div
          key={topic.Topic}
          className={cx(
            "question-dt",
            // Kích hoạt lớp 'enable' nếu đây là loại câu hỏi được chọn
            (enable.type && enable.title === topic.Topic.toUpperCase()) && "enable"
          )}
        >
          {topic.detail.map((question) => (
            <div key={question.title} className={cx("question-child")}>
              <div
                className={cx("title")}
                onClick={() => handleParameter(question.title)}
              >
                <h2>{question.title}</h2>
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon
                  className={cx(
                    "reverse-minus",
                    // Kích hoạt hiệu ứng vòng quay nếu câu trả lời được mở
                    (visible.title === question.title) && "animationRotate",
                    // Kích hoạt hiệu ứng vòng quay ngược lại nếu câu trả lời được đóng
                    (visible.title === question.title && !visible.type) && "animationRotateReverse"
                  )}
                  icon={faMinus}
                />
              </div>
              <p
                className={cx(
                  // Kích hoạt hiệu ứng hiển thị nếu câu trả lời được mở
                  (visible.title === question.title) && "animationVisible",
                  // Kích hoạt hiệu ứng ẩn đi nếu câu trả lời được đóng
                  (visible.title === question.title && !visible.type) && "animationHidden"
                )}
              >
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// Component chính
function Question() {
  const [enable, setEnable] = useState({
    type: true,
    title: "FUNDING"
  });
  const [visible, setVisible] = useState({
    type: true,
    title: ""
  });

  // Hàm xử lý khi tiêu đề câu hỏi được chọn
  const handleTitle = (titleQuestion) => {
    setEnable({
      ...enable,
      title: titleQuestion
    });
  };

  // Hàm xử lý khi mở hoặc đóng nội dung câu hỏi
  const handleParameter = (titleQuestion) => {
    setVisible((prev) => ({
      type: prev.title === titleQuestion ? !prev.type : true,
      title: titleQuestion
    }));
  };

  return (
    <div className={cx("questions")}>
      <div className={cx("question")}>
        <h1>FAQS</h1>
        <div className={cx("question-content")}>
          {/* Truyền các props vào các component con */}
          <Title enable={enable} handleTitle={handleTitle} />
          <Detail enable={enable} handleParameter={handleParameter} visible={visible} />
        </div>
      </div>
    </div>
  );
}

export { Question };
