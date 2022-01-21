import React, {Children} from 'react';
import classes from './Carousel.module.css'

function Carousel(props) {
    const { children } = props;

    const displayItems = Children.map(children, (child, index) =>(
        <div className={classes.CarouselItem} id={`carouselitem` + index}>{child}</div>
    ))

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.LeftArrow}>❰</div>
                <div className={classes.DisplayFrame}>
                    {displayItems}
                </div>
                <div className={classes.RightArrow}>❱</div>
            </div>
        </div>
    )
}

export default Carousel;