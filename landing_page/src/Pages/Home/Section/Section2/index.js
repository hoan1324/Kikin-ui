import styles from "../../HomeStyle.module.scss"
import { imageSection2 } from "../../../../ImageLink/imageLink";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState,useEffect,useRef } from "react";

const cx=classNames.bind(styles)
function SectionTwo(){
    const [visible, setVisible] = useState(Array(imageSection2.length).fill(false));
    let imgRef=useRef(null);
   
    useEffect(()=>{
        
        const scrollVisible = () => {
            
            
            let imgChilds=imgRef.current.children
            const imgArray = Array.from(imgChilds);
            
         imgArray.forEach((element,index)=>{
            const elmGet = element.getBoundingClientRect();
            const isVisible = window.scrollY > elmGet.top ;
            
            setVisible(pre=>{
                let newVisible=[...pre];
                newVisible[index]=isVisible;
                return newVisible;
            });
         })
                
            
        }
        scrollVisible();

        window.addEventListener("scroll", scrollVisible);
        return () => {
            window.removeEventListener("scroll", scrollVisible)
        }
    },[]);

    
    return(
        <div className={cx("section-2","image-position","section","section-bg")}>
            <div className={cx("title")}>
            <h1>GOOD FOR THE<br />PLANET. AND<br />YOUR BUSINESS. </h1>
            <div className={cx("parameter")}>
                    <p>We are on a mission to help good businesses grow. This is why we reward</p>
                    <p>sustainable businesses with lower fees, freeing up even more of your cash.</p>
                    <p>Get started and access funding in 5 minutes.</p>
                </div>
                <button className={cx("btn-green", "btnGreenHover")}><Link to="/Login">GET FUNDING</Link></button>
            </div>
            <div ref={imgRef} className={cx("img-family-circle")}>
                {imageSection2.map((imgs2)=>(
                    <img key={imgs2.id} className={cx("img-icon-postion",(visible[imgs2.id] === false) ? "animationHidden" : "animationVisible")} 
                    src={imgs2.linkImgae} alt="logo" 
                    style={{
                        top:imgs2.top+"%",
                        bottom:imgs2.bottom+"%",
                        right:imgs2.right+"%",
                        left:imgs2.left+"%"
                    }}
                    />
                ))}
            </div>
        </div>
    )
}

export{SectionTwo}
