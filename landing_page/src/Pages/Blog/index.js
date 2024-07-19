import LayoutNotQues from "../../Components/Layout/LayoutNotQues";
import styles from "./BlogStyle.module.scss"
import { listBlog } from "../../ImageLink/imageLinkBlog";

import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles)
//hiển thị mỗi mục blog
function BlogItem({ blog }) {
    const navigate = useNavigate();

    const handleBlogClick = () => {
        navigate(`/Blog/${blog.h1.replace(/ /g, "-")}`, { state: { detail: blog } });
    };

    return (
        <div
            onClick={handleBlogClick}
            className={cx("blog-item", "row text-dark border-bottom border-secondary pb-5 mt-5")}
        >
            <div className={cx("col-12 col-md-5")}>
                <img className={cx("w-100 rounded")} src={blog.img} alt="image-blog" />
            </div>
            <div className={cx("col-12 col-md-7 position-relative")}>
                <h1 className={cx("display-2 lh-1 fw-bold")}>{blog.h1}</h1>
                <p className={cx("fs-5")}>{blog.p}</p>
                <p className={cx("fs-4 position-absolute bottom-0", "date")}>{blog.date}</p>
            </div>
        </div>
    );
}
function Blog() {
    return (
        <LayoutNotQues bgColor="#f3ede4" logoBlack="logoBlack" textColor="black">
            <div className={cx("content-blog", "container-fluid")}>
                <h1 className={cx("text-center display-2 fw-bold py-5")}>KIKIN BLOG</h1>
                <div className={cx("list-blog-body mt-5")}>
                    {listBlog.map((blog, index) => (
                        <BlogItem key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </LayoutNotQues>
    );
}

export { Blog };