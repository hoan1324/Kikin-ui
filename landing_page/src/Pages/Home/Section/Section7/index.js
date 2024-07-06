import styles from "./Section7Style.module.scss"
import {imageSection7} from "../../../../ImageLink/imageLinkHome"

import classNames from "classnames/bind";
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx=classNames.bind(styles)
function SectionSeven(){
return (
    <div className={cx("section-7","section-bg")}>
       <Carousel className={cx("ca-sec7")} indicators={false} slide={false}
         prevIcon={<FontAwesomeIcon className={cx("icon-left","icon")} icon={faArrowLeft}  />}
         nextIcon={<FontAwesomeIcon className={cx("icon-right","icon")} icon={faArrowRight}  />}
       >
      {imageSection7.map((prop)=>(
        <Carousel.Item className={cx("caItem-sec7")}   interval={2000}>
          {prop.imgAbove && <Image className={cx("img-Above")} src={prop.imgAbove} />}     
          <Carousel.Caption className={cx("caption-section7")}>
          {prop.title && <h3>
            {prop.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < prop.title.split('\n').length && <br />}
                        </React.Fragment>
                    ))}
            </h3>}
          {prop.content &&  <p>{prop.content}</p>}
        </Carousel.Caption>
       <div className={cx("content-img")}>
       {prop.imgBelow && <Image className={cx("img-Below")} src={prop.imgBelow} />}
       {prop.content_logo && <p className={cx("content-p")}>{prop.content_logo}</p>}
       </div>
      </Carousel.Item>
      ))}
    </Carousel>  
    <img className={cx("imgNearlog")} src="/assest/pictures/pic_home_18.png" />
    <img className={cx("imgNearlog")} src="/assest/pictures/pic_home_19.png" />

    </div>
)
}
export {SectionSeven}