import React from 'react';
import LayoutNotQues from "../../../Components/Layout/LayoutNotQues";
import styles from "./BlogDetailStyle.module.scss"
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
//Hiện thị các đoạn văn
function Paragraphs({ paragraphs }) {
  return paragraphs.length > 0 && paragraphs.map((paragraph, index) => (
    <p className={cx("fs-4")} key={index}>{paragraph}</p>
  ));
}
//hiện thì các list
function ListItems({ items }) {
  return items.length > 0 && items.map((item, index) => (
    <li className={cx("fs-4 mt-3")} key={index}>{item}</li>
  ));
}
//Hiện thị từng phần tử trong content-deatil
function ContentDetail({ contentDetail }) {
  return (
    <div className={cx("content-detail my-4")}>
      {contentDetail.title && <h1 className={cx("display-4")}>{contentDetail.title}</h1>}
      <Paragraphs paragraphs={contentDetail.content.p_above} />
      <ul>
        <ListItems items={contentDetail.content.list} />
      </ul>
      <Paragraphs paragraphs={contentDetail.content.p_below} />
      {contentDetail.content_child.length > 0 && contentDetail.content_child.map((child, index) => (
        <div key={index} className={cx("content-child my-3")}>
          {child.title && <h1>{child.title}</h1>}
          <Paragraphs paragraphs={child.content.p_above} />
          <ul>
            <ListItems items={child.content.list} />
          </ul>
          <Paragraphs paragraphs={child.content.p_below} />
        </div>
      ))}
    </div>
  );
}

function DetailBlog() {
  const location = useLocation();
  const { detail } = location.state || {};

  return (
    <LayoutNotQues bgColor="#f3ede4" logoBlack="logoBlack" textColor="black">
      <div className={cx("body-blog-detail", "container-fluid")}>
        <div className={cx("title", "text-center pt-4")}>
          <p className={cx("fs-4 my-3")}>{detail.date}</p>
          <h1 className={cx("display-1 fw-bold my-3 lh-1")}>{detail.h1}</h1>
          <img className="my-3" src={detail.img} alt="Blog" />
        </div>
        <div className={cx("content", "container")}>
          <Paragraphs paragraphs={detail.content_blog.intro} />
          {detail.content_blog.content_detail.map((contentDetail, index) => (
            <ContentDetail key={index} contentDetail={contentDetail} />
          ))}
        </div>
      </div>
    </LayoutNotQues>
  );
}

export default DetailBlog;
