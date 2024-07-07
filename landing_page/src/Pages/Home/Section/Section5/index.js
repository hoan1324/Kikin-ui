import classNames from "classnames/bind";
import { useState,useRef,useEffect } from "react";

import styles from "./Section5Style.module.scss"
import { titleH1 } from "./title";
import { imageSection5 } from "../../../../ImageLink/imageLinkHome";

const cx = classNames.bind(styles)
function SectionFive() {
    const [changeColor, setChangeColor] = useState(Array(titleH1.length).fill(false));
    let titleRef=useRef(null);
    useEffect(()=>{
        
        const scrollChangeColor = () => {
            
            let titleChilds=titleRef.current.children
            const titleArray = Array.from(titleChilds);
          titleArray.forEach((element,index)=>{
            const elmGet = element.getBoundingClientRect();
            const isChangeColor = elmGet.top-500 < 0 ;
            
            
                setChangeColor(pre=>{
                    let newChangeColor=[...pre];
                    newChangeColor[index]=isChangeColor;
                    return newChangeColor;
                });
            
         })
                
            
        }
        scrollChangeColor();

        window.addEventListener("scroll", scrollChangeColor);
        return () => {
            window.removeEventListener("scroll", scrollChangeColor)
        }
    },[]);

    return (
        <div  className={cx("section-5", "section", "image-position")}>
            <div ref={titleRef} className={cx("title-family")}>
                {titleH1.map((tH1) => (
                    <h1 key={tH1.id}
                    className={cx((changeColor[tH1.id] === false) ? "animation-notchange-color" : "animation-change-color")}
                    >{tH1.title}</h1>
                ))}
            </div>
           <div className={cx("img-family")} >
           <div className={cx("img-family-circle")}>
                {imageSection5.map((imageSec) => (
                    (imageSec.type === "circle") ?
                        <img className={cx((imageSec.id===2)?"up":"")} key={imageSec.id} src={imageSec.linkImgae} alt="logo" 
                        style={{
                            top:imageSec.top+"%",
                            bottom:imageSec.bottom+"%",
                            right:imageSec.right+"%",
                            left:imageSec.left+"%"
                        }}
                        />
                        : null
                ))}
            </div>
            <div className={cx("img-family-square")}>
                {imageSection5.map((imageSec) => (
                    (imageSec.type === "square") ?
                        <img className={cx((imageSec.id===7)?"left":"")}  key={imageSec.id} src={imageSec.linkImgae} alt="logo" 
                        style={{
                            top:imageSec.top+"%",
                            bottom:imageSec.bottom+"%",
                            right:imageSec.right+"%",
                            left:imageSec.left+"%"
                        }}
                        />
                        : null
                ))}
            </div>

           </div>
        </div>
    )
}
export { SectionFive }