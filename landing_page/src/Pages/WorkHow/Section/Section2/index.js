import styles from "./Section2Style.module.scss"
import { imageSec2 } from "../../../../ImageLink/imageLinkWorkHow";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState ,useEffect} from "react";

const cx = classNames.bind(styles)
function SectionTwo() {
  const [visible, setVisible] = useState(Array(imageSec2.length).fill(false))
  const[changeColor,setChangeColor]=useState(Array(imageSec2.length).fill(false))
  let sectionRef=useRef(null);
  useEffect(()=>{
        
    const scrollChangeColor = () => {
        console.log("nut1:"+sectionRef.current.children[0].children[0].getBoundingClientRect().bottom);
        console.log("nut2:"+sectionRef.current.children[1].children[0].getBoundingClientRect().bottom);

        console.log("nut3:"+sectionRef.current.children[2].children[0].getBoundingClientRect().bottom);

    //     let titleChilds=titleRef.current.children
    //     const titleArray = Array.from(titleChilds);
    //   titleArray.forEach((element,index)=>{
    //     const elmGet = element.getBoundingClientRect();
    //     const isChangeColor = elmGet.top-500 < 0 ;
        
        
    //         // setChangeColor(pre=>{
    //         //     let newChangeColor=[...pre];
    //         //     newChangeColor[index]=isChangeColor;
    //         //     return newChangeColor;
    //         // });
        
    //  })
            
        
    }
    scrollChangeColor();

    window.addEventListener("scroll", scrollChangeColor);
    return () => {
        window.removeEventListener("scroll", scrollChangeColor)
    }
},[]);
  const handleParameter=(index)=>{
  setVisible(pre=>{
    const newState=[...pre];
    newState[index]=!pre[index];
    return newState
  }
  )
}
  return (
    <div className={cx("section-2")}>
      <div ref={sectionRef} className={cx("sec2Contain")}>
        {imageSec2.map((title, index) => (
          <div key={title.id} className={cx("sec2Item-parent", "d-flex", "justify-content-between", "container-fluid")}>
            <div className={cx("btn-animation")}>
              <button className={cx("position-relative", "btn-green", "rounded-circle", "btn-title",(changeColor[index]===false)?"animation-notchange-bgcolor" : "animation-change-bgcolor")}
              
              >{"0" + (title.id + 1)}</button>
              <div className={cx("border-btn-animation")}></div>
            </div>
            <div className={cx("sec2Item","d-flex", "justify-content-between", "container")}>
              <div className={cx("title-sec2")}>
                <h2 className={cx("display-4 ")}>{title.h2}</h2>
                <p>{title.p}</p>
                {
                  title.p_detail &&
                  <div className={cx("question", "position-relative", "overflow-hidden")}>
                    <div
                    onClick={()=>handleParameter(index)}
                     className={cx("title-question","position-relative")}>
                      <h6>{title.p_title}</h6>
                      <FontAwesomeIcon className={cx("position-absolute","end-0","top-0")} icon={faMinus} />
                      <FontAwesomeIcon
                        className={cx(
                          "reverse-minus","top-0",
                          // Kích hoạt hiệu ứng vòng quay nếu câu trả lời được mở
                          (visible[index] === true) ? "animationRotate" : "animationRotateReverse"
                        )}
                        icon={faMinus}
                      />
                      <p
                        className={cx(
                          // Kích hoạt hiệu ứng hiển thị nếu câu trả lời được mở
                          (visible[index] === true) ? "animationVisible" : "animationHidden"
                        )}
                      >
                        {title.p_detail}
                      </p>
                    </div>
                  </div>
                }
                {
                  title.btn && <button>{title.btn}</button>
                }
              </div>
              <div className={cx("chart", "ms-auto")}>

                <div className={cx(title.imgAnimate.class, "chart-animtion","rounded")}
                  style={{
                    backgroundImage: `url(${title.imgAnimate.img})`
                  }}
                >
                  <img src={title.imgAnimate.chart} />
                </div>


              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  )
}
export { SectionTwo }